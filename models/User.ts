import { Schema, model, Model } from 'mongoose';

const userSchema: Schema<any, Model<any, any, any, any>, any, any> = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: [
      {
        houseNumber: {
          type: String,
        },
        city: {
          type: String,
        },
        street: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true },
);

const User = model('User', userSchema);

export default User;
