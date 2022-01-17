import User from '../models/User';
import { findFromDB } from '../shared';
import { amazeResponse } from '../shared/responses';
import isValidUser from '../utils/isValid';

export const GetAllUser = async (token: String) => {
  try {
    const res = await isValidUser(findFromDB, token, User, 'All');
    if ((await res).isValid) {
      return amazeResponse('fetched Successfully', res.data, false, 200);
    }
    return amazeResponse('InValid User', null, true, 400);
  } catch (err) {
    return amazeResponse('failed to fetch', null, true, 400);
  }
};

export const hyy: string = 'hii';
