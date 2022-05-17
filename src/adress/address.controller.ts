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
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/roles/role.enum';
import { Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';
import { AuthUser } from 'src/user/user.decorator';
import { AddressDto } from './address.dto';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Customer)
  async GetAllAddress(@AuthUser() user: any) {
    return await this.addressService.getAllAddres(user.sub);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Customer)
  async AddAdress(@Body() body: AddressDto, @AuthUser() user: any) {
    return await this.addressService.addAddres(body, user.sub);
  }

  @Get('/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Customer)
  async SingleAddres(@Param() params, @AuthUser() user: any) {
    return await this.addressService.getSingleAddress(user.sub, params.id);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Customer)
  async deleteAddress(@Param() params, @AuthUser() user: any) {
    return await this.addressService.deleteAddres(user.sub, params.id);
  }

  @Patch('/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.Customer)
  async updateAddress(
    @Param() params,
    @AuthUser() user: any,
    @Body() body: AddressDto,
  ) {
    return await this.addressService.updateAddress(user.sub, params.id, body);
  }
}
