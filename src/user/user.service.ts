import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  private users: User[] = [];

  constructor(
    @InjectModel('PocketUser') private readonly userModel: Model<User>,
  ) {}

  async insertUser(
    _id: string,
    username: string,
    mail: string,
    name: string,
    surname: string,
    password: string,
  ) {
    const newUser = new this.userModel({
      _id,
      username,
      mail,
      name,
      surname,
      password,
    });
    const result = await newUser.save();
    return result?.username;
  }

  async findOne(sub: string) {
    const users = await this.userModel.find().exec();

    const userIndex = users.findIndex((prod) => {
      return prod.id == sub;
    });

    const user = users[userIndex];

    return user;
  }

  async updateProfile(sub: string, body: UserDto) {
    const getUser = await this.findOne(sub);
    console.log(getUser);
    if (body.avatar) {
      getUser.avatar = body.avatar;
    }
    if (body.mail) {
      getUser.mail = body.mail;
    }
    if (body.name) {
      getUser.name = body.name;
    }
    if (body.surname) {
      getUser.surname = body.surname;
    }

    getUser.save();
    return getUser;
  }

  async deleteUser(sub: string) {
    const deleted = await this.userModel.deleteOne({ _id: sub });

    return deleted;
  }
}
