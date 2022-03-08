import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Configuration } from './configuration';
import { HttpExceptionFilter } from './filters/HttpExceptionFilter';
import { ValidationPipe } from './pipes/ValidationPipe.';

const logger = new Logger('server');

async function bootstrap() {
  const { HTTP_PORT } = Configuration;
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors();

  await app.listen(HTTP_PORT, () => {
    logger.log(`Server started listening on port ${HTTP_PORT}`);
  });
}

bootstrap();
