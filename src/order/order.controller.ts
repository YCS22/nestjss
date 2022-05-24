import { Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getOrders() {
    return await this.orderService.getOrder();
  }

  @Post()
  async postOrder() {
    return await this.orderService.postOrder();
  }
}
