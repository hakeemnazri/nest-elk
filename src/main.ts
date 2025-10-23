import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AppConfigType } from './appConfig/configs/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const appConfig = configService.getOrThrow<AppConfigType>('app');
  const port = appConfig.port;
  await app.listen(port);
}
void bootstrap();
