import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import markoMiddleware from '@marko/express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setLocal('NODE_ENV', process.env['NODE_ENV'] || 'development');
  app.use(markoMiddleware());
  await app.listen(3000);
}

bootstrap();
