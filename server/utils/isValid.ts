import { verify } from 'jsonwebtoken';
import User from '../db/models/User';
import { IisValidUser } from '../types/authType';
import { findFromDB } from './shared';

const isValidUser = async (
  cb: any = null,
  token: any = '',
  ...rest: any
): Promise<IisValidUser> => {
  try {
    const userDetail: any = await verify(token, `${process.env.JWT_SECRET}`);
    const isUserExist: any = await findFromDB(User, 'One', {
      email: userDetail?.userEmail,
    });

    if (isUserExist?.email || isUserExist?.phoneNumber) {
      if (cb) {
        const res = await cb(...rest);
        return { isValid: true, data: res, userId: isUserExist.id };
      }

      return {
        isValid: true,
        data: {
          phoneNumber: isUserExist?.phoneNumber,
          email: isUserExist?.email,
        },
        userId: isUserExist.id,
      };
    }
    return { isValid: false, data: null, userId: null };
  } catch (error) {
    return { isValid: false, data: null, userId: null };
  }
};

export default isValidUser;
