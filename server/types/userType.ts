import mongoose from 'mongoose';

export interface SingleuserType {
  id?: mongoose.Types.ObjectId;
  userName: String;
  email: string;
  password: string | Buffer;
  isPhoneVerified: boolean;
  isEmailVerified: boolean;
  phoneNumber: String;
  role?: String;
  address?: { houseNumber: String; city: String; street: String }[];
}
