import Product from '../db/models/Product';
import isValidUser from '../utils/isValid';
import { addToDB } from '../utils/shared';

export const CreateProduct = async (args: any, token: any) => {
  const res = await isValidUser(addToDB, token, Product, args.input);
  return res.data;
};

export const hi = 'hllo';
// await addToDB(Product, args)
