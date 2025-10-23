import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import environmentValidation from './validations/environment.validation';
import appConfig from './configs/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      load: [appConfig],
      validationSchema: environmentValidation,
    }),
  ],
  exports: [],
})
export class AppConfigModule {}
