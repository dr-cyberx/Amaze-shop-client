import Product from '../db/models/Product';
import isValidUser from '../utils/isValid';
import { addToDB } from '../utils/shared';
import { amazeResponse } from '../utils/shared/responses';

export const CreateProduct = async (args: any, token: any) => {
  const res = await isValidUser(addToDB, token, Product, args.input);
  if (res.isValid) {
    return amazeResponse('Product created successfully!', res.data, false, 200);
  }
  return amazeResponse('Failed to fetch', null, true, 400);
};

export const hi = 'hllo';
// await addToDB(Product, args)
