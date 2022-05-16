import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesGuard } from 'src/roles/roles.guard';
import { UsersModule } from 'src/users/users.module';

import { ProductsController } from './product.controller';
import { ProductSchema } from './product.model';
import { ProductsService } from './product.service';
@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductModule {}
