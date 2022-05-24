import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrderService {
  constructor(@InjectModel('Order') private readonly orderModel: Model<any>) {}

  async getOrder() {
    const order = await this.orderModel.find().populate('region').exec();
    return order;
  }

  async postOrder() {
    const newOrder = new this.orderModel({
      region: '628be4431afa3ad7c63ff934',
    });

    newOrder.save();

    return newOrder;
  }
}
