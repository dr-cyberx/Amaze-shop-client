import { sign } from 'jsonwebtoken';
import { SingleuserType } from '../types/userType';
import User from '../models/User';
import { addToDB } from '../shared/user';
// import isAuth from '../utils/Auth';

const SignUp = async (
  args: SingleuserType,
): Promise<{ data: SingleuserType; token: string } | null> => {
  const {
    email,
    userName,
    id,
    phoneNumber,
    address,
  }: Promise<SingleuserType> | any = await addToDB(User, args);

  if (email) {
    const token: string = sign({ userId: id }, 'MY_SECRET');

    return {
      data: {
        email,
        userName,
        id,
        phoneNumber,
        address,
      },
      token,
    };
  }
  return null;
};

export default SignUp;
