import { sign } from 'jsonwebtoken';
import { hash } from 'bcrypt';
import { SingleuserType } from '../types/userType';
import User from '../db/models/User';
import { addToDB, findFromDB } from '../utils/shared';
import { signUpResponse } from '../utils/shared/responses';
// import isAuth from '../utils/Auth';

const SignUp = async (args: SingleuserType) => {
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
        return signUpResponse('Sign Up successfully', user, token, false, 200);
      }
      return signUpResponse('Sign Up failed');
    }
    return signUpResponse('User already exist');
  } catch (error) {
    console.log(error);
    return signUpResponse('Something went wrong');
  }
};

export default SignUp;
