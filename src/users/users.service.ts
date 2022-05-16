import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.model';

@Injectable()
export class UsersService {
  private users: Users[] = [];

  constructor(@InjectModel('Users') private readonly userModel: Model<Users>) {}

  async insertUser(name: string, mail: string) {
    console.log('name', name, mail);
    const newUser = new this.userModel({
      name,
      mail,
    });
    const result = await newUser.save();
    return result?.name;
  }

  async findOne(sub: string) {
    const users = await this.userModel.find().exec();

    const userIndex = users.findIndex((prod) => {
      return prod.sub == sub;
    });

    const user = users[userIndex];

    return user;
  }
}
