import mongoose from 'mongoose';

export interface SingleuserType {
  id?:mongoose.Types.ObjectId,
  userName: String;
  email: String;
  password?: String;
  phoneNumber: String;
  address?: { houseNumber: String; city: String; street: String }[];
}
