import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TemplateService } from './template.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../dist/app/assets'),
      serveRoot: '/assets',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, TemplateService],
})
export class AppModule {}
