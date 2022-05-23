import * as mongoose from 'mongoose';

export const SubCategorySchema: any = new mongoose.Schema(
  {
    name: { type: String },
  },
  { _id: false },
);
export const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  subCategory: [SubCategorySchema],
});
