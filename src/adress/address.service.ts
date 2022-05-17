import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddressDto } from './address.dto';
import { Address } from './address.model';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel('PocketAddress') private readonly addressModel: Model<Address>,
  ) {}

  async addAddres(address: AddressDto, sub: string) {
    console.log('service', address);

    const newAddress = new this.addressModel({
      name: address.name,
      country: address.country,
      region: address.region,
      street: address.street,
      apartment: address.apartment,
      no: address.no,
      sub,
    });

    const result = newAddress.save();
    return result;
  }

  async getAllAddres(sub: string) {
    const addressList = await this.addressModel.find().exec();

    const newList = addressList.filter((item: any) => {
      return item.sub == sub;
    });

    return newList;
  }

  async getSingleAddress(sub: string, addressId: string) {
    const addressList = await this.addressModel.find().exec();

    const address = addressList.find((item: any) => {
      return item.sub == sub && addressId == item._id;
    });

    return address;
  }

  async deleteAddres(sub: string, addressId: string) {
    const deleted = await this.addressModel.deleteOne({ _id: addressId, sub });
    return deleted;
  }

  async updateAddress(sub: string, addressId: string, address: AddressDto) {
    const getSingle = await this.getSingleAddress(sub, addressId);

    if (address.street) {
      getSingle.street = address.street;
    }
    if (address.country) {
      getSingle.country = address.country;
    }
    if (address.name) {
      getSingle.name = address.name;
    }
    if (address.apartment) {
      getSingle.apartment = address.apartment;
    }
    if (address.region) {
      getSingle.region = address.region;
    }
    if (address.no) {
      getSingle.no = address.no;
    }

    getSingle.save();

    return getSingle;
  }
}
