import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema, RegionSchema } from 'src/admin/admin.model';
import { AdminModule } from 'src/admin/admin.module';
import { OrderController } from './order.controller';
import { OrderSchema } from './order.model';
import { OrderService } from './order.service';

@Module({
  imports: [
    AdminModule,
    MongooseModule.forFeature([
      { name: 'Order', schema: OrderSchema },
      { name: 'Category', schema: CategorySchema },
      { name: 'Region', schema: RegionSchema },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
