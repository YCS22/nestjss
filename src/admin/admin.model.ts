import * as mongoose from 'mongoose';

export const SubCategorySchema: any = new mongoose.Schema(
  {
    name: { type: String },
  },
  { _id: false },
);

export const RegionSchema: any = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  value: { type: String },
});

export const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  subCategory: [SubCategorySchema],
  region: [RegionSchema],
  fromCity: [{ type: String }],
  toCity: [{ type: String }],
  fromRegion: [{ type: String }],
  toRegion: [{ type: String }],
  date: [
    {
      month: { type: String },
      day: { type: String },
    },
  ],
  squaremeter: [{ type: String }],
  period: [{ type: String }],
  startingHour: [{ type: String }],
  fromFloor: [{ type: String }],
  toFloor: [{ type: String }],
  extraServices: [{ name: { type: String }, price: { type: Number } }],
  complemantaryServices: [{ name: { type: String }, price: { type: Number } }],
  cleaningFrequency: [{ name: { type: String } }],
  extraPackingServices: [{ name: { type: String } }],
  insuranceServices: [{ name: { type: String } }],
});
