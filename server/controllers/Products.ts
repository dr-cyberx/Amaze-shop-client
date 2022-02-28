import Product from '../db/models/Product';
import { IGetAllData } from '../types/authType';
import isValidUser from '../utils/isValid';
import { addToDB } from '../utils/shared';
import { amazeResponse } from '../utils/shared/responses';

export const CreateProduct = async (
  args: any,
  token: any,
): Promise<IGetAllData> => {
  try {
    const { isValid, data } = await isValidUser(
      addToDB,
      token,
      Product,
      args.input,
    );
    if (isValid) {
      return amazeResponse('Product created successfully!', data, false, 200);
    }
    return amazeResponse('InValid User', null, true, 401);
  } catch (error) {
    return amazeResponse(`${error}`, null, true, 404);
  }
};

export const UpdateProduct = async (args: any, token: any) => {
  try {
    const { isValid, userId, data } = await isValidUser(null, token);
    console.log('update product data ---> ', isValid, userId, data);
  } catch (error) {
    console.log(error);
  }
};

export const hi = 'hllo';
