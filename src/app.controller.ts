import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { indexPage } from '../dist/app';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(@Req() req: Request, @Res() res: Response): any {
    console.log(JSON.stringify(req.headers, null, 2));
    res.marko(indexPage);
  }
}
