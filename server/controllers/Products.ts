import Product from '../db/models/Product';
import { IGetAllData } from '../types/authType';
import isValidUser from '../utils/isValid';
import { addToDB, UpdateToDB } from '../utils/shared';
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
    const { isValid, userId } = await isValidUser(null, token);
    if (isValid) {
      const createProductResponse = await UpdateToDB(
        Product,
        args.productId,
        {
          ...args,
          productSeller: userId,
        },
        true,
      );
      return amazeResponse(
        'Product updated successfully!',
        { ...createProductResponse, id: createProductResponse?._id },
        false,
        200,
      );
    }
    return amazeResponse('InValid User', null, true, 401);
  } catch (error) {
    console.log(error);
    return amazeResponse('something went wrong!', null, true, 401);
  }
};

export const hi = 'hllo';
