import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('save')
  async addUser(
    @Body('name') userName: string,
    @Body('mail') userEmail: string,
  ) {
    const name = await this.userService.insertUser(userName, userEmail);

    return { name };
  }
}
