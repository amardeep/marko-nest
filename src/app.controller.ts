import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { TemplateService } from './template.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly templateService: TemplateService,
  ) {}

  @Get()
  async getIndex(@Req() req: Request, @Res() res: Response) {
    const templates = await this.templateService.getTemplates();
    res.marko(templates.indexPage);
  }
}
