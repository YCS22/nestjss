import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddressDto } from 'src/user/address.dto';
import { UserDto } from './user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  private users: User[] = [];

  constructor(
    @InjectModel('PocketUser') private readonly userModel: Model<User>,
    @InjectModel('City') private readonly cityModel: Model<User>,
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

  async getProfile(sub: string) {
    const users = await this.userModel.find().exec();
    const cities: any = await this.cityModel.find();
    const userIndex = users.findIndex((prod) => {
      return prod.id == sub;
    });

    const user: any = users[userIndex];

    return { ...user._doc, cities: cities };
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

  async findOne(sub: string) {
    const users = await this.userModel.find().exec();

    const userIndex = users.findIndex((prod) => {
      return prod.id == sub;
    });

    const user = users[userIndex];

    return user;
  }

  async getAllAddres(sub: string) {
    const userAddresses: any = await this.userModel.find({ _id: sub }).exec();

    return userAddresses[0].addresses;
  }

  async addAddres(address: AddressDto, sub: string) {
    const getUser: any = await this.userModel.find({ _id: sub }).exec();

    const newAddress = {
      name: address.name,
      country: address.country,
      region: address.region,
      street: address.street,
      apartment: address.apartment,
      no: address.no,
    };

    getUser[0].addresses.push(newAddress);

    getUser[0].save();

    return getUser;
  }

  async getSingleAddress(sub: string, addressId: string) {
    const getUser: any = await this.userModel.find({ _id: sub }).exec();

    const address = getUser[0].addresses.find((item: any) => {
      return item._id == addressId;
    });

    return address;
  }

  async updateAddress(sub: string, addressId: string, address: AddressDto) {
    const getUser: any = await this.userModel.find({ _id: sub }).exec();

    const index = getUser[0].addresses.findIndex((item: any) => {
      return item._id == addressId;
    });

    if (address.street) {
      getUser[0].addresses[index].street = address.street;
    }
    if (address.country) {
      getUser[0].addresses[index].country = address.country;
    }
    if (address.name) {
      getUser[0].addresses[index].name = address.name;
    }
    if (address.apartment) {
      getUser[0].addresses[index].apartment = address.apartment;
    }
    if (address.region) {
      getUser[0].addresses[index].region = address.region;
    }
    if (address.no) {
      getUser[0].addresses[index].no = address.no;
    }

    getUser[0].save();

    return getUser[0].addresses[index];
  }

  async deleteAddres(sub: string, addressId: string) {
    const getUser: any = await this.userModel.find({ _id: sub }).exec();
    getUser[0].addresses.remove({ _id: addressId });
    getUser[0].save();

    return getUser[0];
  }
}
