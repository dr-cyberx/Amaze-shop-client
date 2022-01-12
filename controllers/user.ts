import User from '../models/User';
import { findFromDB } from '../shared';
import { SingleuserType } from '../types/userType';

export const GetAllUser = async (): Promise<any[] | SingleuserType | null> => {
  try {
    const res: Promise<any[] | SingleuserType> = findFromDB(User, 'All');
    return res;
  } catch (err) {
    return null;
  }
};

export const hyy: string = 'hii';
