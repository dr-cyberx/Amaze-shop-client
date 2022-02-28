import Product from '../../../db/models/Product';
import { Type_Create_Update_Product } from '../../../types/ProductType';
import isValidUser from '../../../utils/isValid';
import { findFromDB } from '../../../utils/shared';
import { amazeResponse } from '../../../utils/shared/responses';

export const productquery = {
  getallproducts: async (
    _parents: any,
    args: any,
    { token }: any,
  ): Promise<Type_Create_Update_Product> => {
    try {
      const { isValid, userId, data } = await isValidUser(null, token);
      if (isValid) {
        const res = await findFromDB(Product, 'All');
        return amazeResponse('fetched all user successfully', res, false, 200);
      }
    } catch (error: any) {}
  },
};

export const hi = 'hello';
