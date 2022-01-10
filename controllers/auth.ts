import { SingleuserType } from '../types/userType';
import User from '../models/User';
import { addToDB } from '../shared/user';
// import isAuth from '../utils/Auth';

const SignUp = async (args: SingleuserType): Promise<null | SingleuserType> => {
  const newUser = await addToDB(User, args);
  if (newUser.email) {
    return newUser;
  }
  return null;
};

export default SignUp;
