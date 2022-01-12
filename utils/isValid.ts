// import User from '../models/User';

import { verify } from 'jsonwebtoken';
import User from '../models/User';
import { findFromDB } from '../shared';

const isValidUser = async (
  cb: any,
  token: any,
): Promise<{
  isValid: boolean;
  userId: any;
}> => {
  try {
    console.log('data from token --->>>> ', token);
    const userDetail: any = await verify(token, `${process.env.JWT_SECRET}`);
    const isUserExist: any = await findFromDB(
      User,
      'One',
      userDetail?.userEmail,
    );
    if (isUserExist?.email) {
      cb();
      return { isValid: true, userId: isUserExist.id };
    }
    return { isValid: false, userId: null };
  } catch (error) {
    return { isValid: false, userId: null };
  }
};

export default isValidUser;
