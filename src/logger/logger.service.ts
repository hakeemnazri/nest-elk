import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import { WinstonLoggerProvider } from './providers/winston-logger.provider';

@Injectable()
export class LoggerService {
  private logger: winston.Logger;
  constructor(private readonly winstonLoggerProvider: WinstonLoggerProvider) {
    this.logger = this.winstonLoggerProvider.getLogger();
  }
  log(message: string, context?: string) {
    this.logger.info(message, { context });
  }
  error(message: string, trace: string, context?: string) {
    this.logger.error(message, { context, trace });
  }

  warn(message: string, context?: string) {
    this.logger.warn(message, { context });
  }

  debug(message: string, context?: string) {
    this.logger.debug(message, { context });
  }
}
