import { Module } from '@nestjs/common';
import { WinstonLoggerProvider } from './providers/winston-logger.provider';
import { LoggerService } from './logger.service';
import { ConfigModule } from '@nestjs/config';
import loggerConfig from './configs/logger.config';

@Module({
  providers: [WinstonLoggerProvider, LoggerService],
  imports: [ConfigModule.forFeature(loggerConfig)],
  exports: [LoggerService],
})
export class LoggerModule {}
