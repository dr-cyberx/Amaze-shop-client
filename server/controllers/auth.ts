import { sign } from 'jsonwebtoken';
import { hash, compare } from 'bcrypt';
import { SingleuserType } from '../types/userType';
import User from '../db/models/User';
import { addToDB, findFromDB, UpdateToDB } from '../utils/shared';
import { authResponse, verifiedResponse } from '../utils/shared/responses';
import { IauthResolver, IVerifiedResponse } from '../types/authType';
import isValidUser from '../utils/isValid';

export const SignUp = async (args: SingleuserType): Promise<IauthResolver> => {
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
    return authResponse('Something went wrong');
  }
};

export const Login = async (args: SingleuserType): Promise<IauthResolver> => {
  try {
    const isUserExist: any = await findFromDB(User, 'One', { ...args });
    if (isUserExist?.email) {
      const comparePassword: boolean = await compare(
        args?.password,
        isUserExist?.password,
      );
      if (comparePassword) {
        const token: string = sign(
          JSON.stringify({
            userId: isUserExist.id,
            userEmail: isUserExist.email,
          }),
          `${process.env.JWT_SECRET}`,
        );
        return authResponse(
          'Logged In successfully',
          isUserExist,
          token,
          false,
          200,
        );
      }
    }
    return authResponse('User not Found');
  } catch (error) {
    return authResponse(`failed to Logged in ${error}`);
  }
};

export const VerifyNumber = async (
  args: { phoneNumber: string },
  token: string,
): Promise<IVerifiedResponse> => {
  try {
    const { isValid, userId } = await isValidUser(null, token);
    if (isValid) {
      await UpdateToDB(User, userId, { isPhoneVerified: true }, true);
      return verifiedResponse('Phone number verified successfully!', 200, true);
    }
    return verifiedResponse('Invalid User!');
  } catch (error) {
    return verifiedResponse('Something went wrong!');
  }
};
