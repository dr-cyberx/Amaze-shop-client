import { sign } from 'jsonwebtoken';
import { SingleuserType } from '../types/userType';
import { ISignup } from '../types/authType';
import User from '../models/User';
import { addToDB } from '../shared/user';
// import isAuth from '../utils/Auth';

const SignUp = async (args: SingleuserType): Promise<ISignup | null> => {
  const {
    email, userName, id, phoneNumber, address,
  }: SingleuserType = await addToDB(User, args);
  if (email) {
    const token: string = sign({ userId: id }, 'MY_SECRET');
    return {
      email, userName, id, phoneNumber, address, token,
    };
  }
  return null;
};

export default SignUp;
