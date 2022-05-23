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
import { UserService } from './user/user.service';
import { AdminService } from './admin/admin.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly adminService: AdminService,
  ) {}

  @Get('/categories')
  @Header('Content-Type', 'text/html')
  getHello() {
    return this.adminService.getCategory();
  }
}
