import Product from '../db/models/Product';
import { addToDB } from '../utils/shared';

export const CreateProduct = async (args: any) => {
  const res = await addToDB(Product, args);
  console.log('--->> res ----->> ', res);
};

export const hi = 'hllo';
