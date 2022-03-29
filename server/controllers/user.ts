import { ApolloError } from 'apollo-server-errors';
import User from '../db/models/User';
import { findFromDB } from '../utils/shared';
import { amazeResponse } from '../utils/shared/responses';
import { IGetAllData } from '../types/authType';
import isValidUser from '../utils/isValid';
import { Type_Create_Update_Product } from '../types/ProductType';

export const GetAllUser = async (
  token: String,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  try {
    const res = await isValidUser(findFromDB, token, User, 'All');
    if ((await res).isValid) {
      return amazeResponse('fetched Successfully', res.data, false, 200);
    }
    return amazeResponse('InValid User');
  } catch (err) {
    return amazeResponse(`failed to fetch ${new ApolloError(err)}`);
  }
};

export const hyy: string = 'hii';
