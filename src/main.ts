import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import markoMiddleware from '@marko/express';
import { TemplateService } from './template.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const environment = process.env['NODE_ENV'] ?? 'development';
  app.setLocal('NODE_ENV', environment);
  app.use(markoMiddleware());

  // Setup Vite SSR. In production, templateService would just
  // load dist/app/index.js. In development, vite loadSSR loads app/index.js
  const templateService = app.get(TemplateService);
  await templateService.init(app);

  await app.listen(3000);
}

bootstrap();
