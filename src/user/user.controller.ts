import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ContextIdFactory } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { Role } from 'src/roles/role.enum';
import { Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';
import { AuthUser } from 'src/user/user.decorator';
import { UserDto } from './user.dto';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get('profile')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Customer)
  async getSingleProfile(@AuthUser() user: any): Promise<any> {
    const singleUser = await this.userService.findOne(user.sub);
    return singleUser;
  }

  @Patch('profile')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Customer)
  async updateUser(@Body() body: UserDto, @AuthUser() user: any) {
    const updatedUser = await this.userService.updateProfile(user.sub, body);
    return updatedUser;
  }

  @Delete('profile')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Customer)
  async deleteUser(@AuthUser() user: any, @Body() body: UserDto) {
    const res = await this.userService.deleteUser(user.sub);
    // const res = await this.authService.deleteUser(
    //   user['cognito:username'],
    //   body,
    // );
    return res;
  }
}
