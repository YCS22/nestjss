import {
  Controller,
  Get,
  UseGuards,
  Header,
  Request,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getHello(@Request() req): string {
    console.log(req.user);
    return this.appService.getHello();
  }
}
