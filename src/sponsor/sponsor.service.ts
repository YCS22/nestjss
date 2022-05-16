import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sponsor } from './sponsor.model';

@Injectable()
export class SponsorService {
  constructor(
    @InjectModel('Sponsor') private readonly sponsorModel: Model<Sponsor>,
  ) {}

  async insertSponsor(
    company_name: string,
    room_id: string,
    message: string,
    email: string,
  ) {
    const newSponsor = new this.sponsorModel({
      company_name,
      room_id,
      message,
      email,
    });

    const result = await newSponsor.save();

    return result.id as string;
  }

  async getAllSponsor() {
    const sponsors = await this.sponsorModel.find().exec();
    return sponsors;
  }

  async getSponsorById(id: string) {
    const singleSponsor = await this.sponsorModel.findById(id).exec();
    return singleSponsor;
  }

  async deleteSponsor(id: string) {
    const result = await this.sponsorModel.deleteOne({ _id: id }).exec();
    if (result?.deletedCount == 1) {
      return 'sponsor is deleted';
    } else {
      return 'sponsor not found';
    }
  }

  async updateSponsor(id: string, email: string) {
    const updatedSponsor = await this.getSponsorById(id);
    if (email) {
      updatedSponsor.email = email;
    }

    updatedSponsor.save();
  }
}
