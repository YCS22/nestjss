import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  username: { type: String, required: true },
  mail: { type: String, required: true },
  role: { type: String, default: 'customer' },
  password: { type: String },
  name: { type: String },
  surname: { type: String },
  avatar: { type: String },
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
