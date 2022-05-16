import * as mongoose from 'mongoose';

export const SponsorSchema = new mongoose.Schema(
  {
    company_name: { type: String, required: true },
    room_id: { type: String, required: true },
    message: { type: String },
    email: { type: String },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

export interface Sponsor {
  company_name: string;
  room_id: string;
  message: string;
  email: string;
}
