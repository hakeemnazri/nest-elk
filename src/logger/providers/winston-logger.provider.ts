import { Inject, Injectable } from '@nestjs/common';
import * as winston from 'winston';
import 'winston-daily-rotate-file';
import loggerConfig from '../configs/logger.config';
import type { ConfigType } from '@nestjs/config';
import { TFormatPrint } from '../interfaces/logger.interface';
import { ElasticsearchTransport, LogData } from 'winston-elasticsearch';

@Injectable()
export class WinstonLoggerProvider {
  private logger: winston.Logger;

  constructor(
    @Inject(loggerConfig.KEY)
    private readonly config: ConfigType<typeof loggerConfig>,
  ) {
    this.logger = this.createLogger();
  }

  private createLogger() {
    const transports = [
      this.createElasticsearchTransport(),
      this.createConsoleTransport(),
      this.createFileTransport(),
    ];

    return winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports,
    });
  }

  private createElasticsearchTransport() {
    const host = this.config.elasticsearchNode;
    const port = this.config.elasticsearchPort;
    const esTransportOpts = {
      level: 'info',
      clientOpts: {
        node: `http://${host}:${port}`,
      },
      indexPrefix: this.config.elasticsearchIndexPrefix,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transformer: (logData: LogData) => {
        const { meta, timestamp, ...other } = logData;
        return {
          '@timestamp': timestamp,
          ...meta,
          ...other,
        };
      },
    };

    return new ElasticsearchTransport(esTransportOpts);
  }

  private createConsoleTransport() {
    return new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.printf(
          ({ timestamp, level, message, context, trace }: TFormatPrint) => {
            return `${timestamp} [${context}] ${level}: ${message}${
              trace ? `\n${trace}` : ''
            }`;
          },
        ),
      ),
    });
  }

  private createFileTransport() {
    return new winston.transports.DailyRotateFile({
      filename: this.config.filePath,
      datePattern: this.config.datePattern,
      zippedArchive: this.config.zippedArchive,
      maxSize: this.config.maxSize,
      maxFiles: this.config.maxFiles,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    });
  }

  getLogger() {
    return this.logger;
  }
}
