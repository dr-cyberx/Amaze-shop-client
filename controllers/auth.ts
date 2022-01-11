import { sign } from 'jsonwebtoken';
import { SingleuserType } from '../types/userType';
import User from '../models/User';
import { addToDB } from '../shared/user';
// import isAuth from '../utils/Auth';

const SignUp = (
  args: SingleuserType,
): { data: SingleuserType; token: string } | null => {
  const {
    email, userName, id, phoneNumber, address,
  }: SingleuserType = addToDB(
    User,
    args,
  );

  if (email) {
    const token: string = sign({ userId: id }, 'MY_SECRET');
    const newObj = {
      email,
      userName,
      id,
      phoneNumber,
      address,
    };
    return { data: newObj, token };
  }
  return null;
};

export default SignUp;
