import mongoose, { model, Schema } from 'mongoose';

const ProductSchema: mongoose.Schema<
  any,
  mongoose.Model<any, any, any, any>,
  any,
  any
> = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productPrice: {
      type: String,
      required: true,
    },
    productSeller: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    productBrand: {
      type: String,
      required: true,
    },
    productRating: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true },
);

const Product: mongoose.Model<any, {}, {}, {}> = model(
  'Product',
  ProductSchema,
);

export default Product;
