import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Region',
  },

  // fromCity: [{ type: String }],
  // toCity: [{ type: String }],
  // fromRegion: [{ type: String }],
  // toRegion: [{ type: String }],
  // date: [
  //   {
  //     month: { type: String },
  //     day: { type: String },
  //   },
  // ],
  // squaremeter: [{ type: String }],
  // period: [{ type: String }],
  // startingHour: [{ type: String }],
  // fromFloor: [{ type: String }],
  // toFloor: [{ type: String }],
  // extraServices: [{ name: { type: String }, price: { type: Number } }],
  // complemantaryServices: [{ name: { type: String }, price: { type: Number } }],
  // cleaningFrequency: [{ name: { type: String } }],
  // extraPackingServices: [{ name: { type: String } }],
  // insuranceServices: [{ name: { type: String } }],
});

export interface User {
  _id: string;
  username: string;
  role: string;
  mail: string;
  password: string;
  name: string;
  surname: string;
  avatar: string;
}
