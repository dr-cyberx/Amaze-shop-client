import User from '../models/User';
import { findFromDB } from '../shared';
// import { SingleuserType } from '../types/userType';
import isValidUser from '../utils/isValid';

export const GetAllUser = async (token: String) => {
  try {
    const res = isValidUser(findFromDB, token, User, 'All');
    return res;
  } catch (err) {
    return null;
  }
};

export const hyy: string = 'hii';
