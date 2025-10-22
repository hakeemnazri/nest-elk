import { LoggerService } from './logger/logger.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly logger: LoggerService) {}
  getHello(): string {
    const mockError = new Error('mock error');
    this.logger.log('Hello from info logger!', 'AppService -> getHello()');
    this.logger.warn('Hello from warn logger!', 'AppService -> getHello()');
    this.logger.error(
      'Hello from error logger!',
      mockError.stack || '',
      'AppService -> getHello()',
    );
    return 'Hello World!';
  }
}
