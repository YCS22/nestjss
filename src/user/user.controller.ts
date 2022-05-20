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
import { AddressDto } from 'src/user/address.dto';
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
    const singleUser = await this.userService.getProfile(user.sub);
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

  @Get('addresses')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Customer)
  async GetAllAddress(@AuthUser() user: any) {
    return await this.userService.getAllAddres(user.sub);
  }

  @Get('address/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Customer)
  async SingleAddres(@Param() params, @AuthUser() user: any) {
    return await this.userService.getSingleAddress(user.sub, params.id);
  }

  @Post('address')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Customer)
  async AddAdress(@Body() body: AddressDto, @AuthUser() user: any) {
    return await this.userService.addAddres(body, user.sub);
  }

  @Patch('address/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Customer)
  async updateAddress(
    @Param() params,
    @AuthUser() user: any,
    @Body() body: AddressDto,
  ) {
    return await this.userService.updateAddress(user.sub, params.id, body);
  }

  @Delete('address/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Customer)
  async deleteAddress(@Param() params, @AuthUser() user: any) {
    return await this.userService.deleteAddres(user.sub, params.id);
  }
}
