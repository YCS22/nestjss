import { Controller, Get, UseGuards, Header, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @Header('Content-Type', 'text/html')
  getHello(@Request() req): string {
    console.log(req.user);
    return this.appService.getHello();
  }
}
