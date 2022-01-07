import { Schema, model, Model } from 'mongoose';

const userSchema: Schema<any, Model<any, any, any, any>, any, any> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const User = model('User', userSchema);

export default User;
