import { sign } from 'jsonwebtoken';
import { hash } from 'bcrypt';
import { SingleuserType } from '../types/userType';
import User from '../db/models/User';
import { addToDB, findFromDB } from '../utils/shared';
import { authResponse } from '../utils/shared/responses';

export const SignUp = async (args: SingleuserType) => {
  try {
    const isUserExist: any = await findFromDB(User, 'One', args?.email);
    if (!isUserExist?.email) {
      const password: string = await hash(args?.password, 12);
      const user: Promise<SingleuserType> | any = await addToDB(User, {
        ...args,
        password,
      });

      if (user.email) {
        const token: string = sign(
          JSON.stringify({ userId: user.id, userEmail: user.email }),
          `${process.env.JWT_SECRET}`,
        );
        return authResponse('Sign Up successfully', user, token, false, 200);
      }
      return authResponse('Sign Up failed');
    }
    return authResponse('User already exist');
  } catch (error) {
    console.log(error);
    return authResponse('Something went wrong');
  }
};

export const Login = async (args: SingleuserType) => {
  try {
    const userCreds: String = args?.email || args?.phoneNumber || args?.userName;
    const isUserExist: any = await findFromDB(User, 'One', userCreds);
    if (!isUserExist?.email) {
      const password: string = await hash(args?.password, 12);
      const user: Promise<SingleuserType> | any = await addToDB(User, {
        ...args,
        password,
      });

      if (user.email) {
        const token: string = sign(
          JSON.stringify({ userId: user.id, userEmail: user.email }),
          `${process.env.JWT_SECRET}`,
        );
        return authResponse('Sign Up successfully', user, token, false, 200);
      }
      return authResponse('Sign Up failed');
    }
    return authResponse('User already exist');
  } catch (error) {
    console.log(error);
    return authResponse('Something went wrong');
  }
};
