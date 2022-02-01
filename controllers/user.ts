import { ApolloError } from 'apollo-server-errors';
import User from '../db/models/User';
import { findFromDB } from '../utils/shared';
import { amazeResponse } from '../utils/shared/responses';
import { IGetAllData } from '../types/authType';
import isValidUser from '../utils/isValid';

export const GetAllUser = async (token: String): Promise<IGetAllData> => {
  try {
    const res = await isValidUser(findFromDB, token, User, 'All');
    if ((await res).isValid) {
      return amazeResponse('fetched Successfully', res.data, false, 200);
    }
    return amazeResponse('InValid User');
  } catch (err: any) {
    return amazeResponse(`failed to fetch ${new ApolloError(err)}`);
  }
};

export const hyy: string = 'hii';
