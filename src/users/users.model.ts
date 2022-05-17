import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },

  mail: { type: String, required: true },
  sub: { type: String },
  role: { type: String },
});

export interface Users {
  id: string;
  name: string;
  sub: string;
  role: string;

  mail: string;
}
