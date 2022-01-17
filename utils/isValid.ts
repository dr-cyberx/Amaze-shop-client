import { verify } from 'jsonwebtoken';
import User from '../db/models/User';
import { findFromDB } from './shared';

const isValidUser = async (
  cb: any,
  token: any,
  ...rest: any
): Promise<{
  isValid: boolean;
  data: any;
  userId: string | null;
}> => {
  try {
    const userDetail: any = await verify(token, `${process.env.JWT_SECRET}`);
    const isUserExist: any = await findFromDB(
      User,
      'One',
      userDetail?.userEmail,
    );
    if (isUserExist?.email || isUserExist?.phoneNumber) {
      const res = await cb(...rest);
      return { isValid: true, data: res, userId: isUserExist.id };
    }
    return { isValid: false, data: null, userId: null };
  } catch (error) {
    return { isValid: false, data: null, userId: null };
  }
};

export default isValidUser;
