import * as mongoose from 'mongoose';

export const AdressSchema = new mongoose.Schema({
  sub: { type: String, required: true },
  name: { type: String },
  country: { type: String },
  region: { type: String },
  street: { type: String },
  apartment: { type: String },
  no: { type: Number },
});

export interface Address {
  sub: string;
  name: string;
  country: string;
  region: string;
  street: string;
  apartment: string;
  no: number;
}
