import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },

  mail: { type: String, required: true },
  sub: { type: String, required: true },
  role: { type: String, required: true },
});

export interface Users {
  id: string;
  name: string;
  sub: string;
  role: string;

  mail: string;
}
