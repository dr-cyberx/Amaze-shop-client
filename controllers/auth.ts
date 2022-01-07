import { SingleuserType } from '../types/userType';
import User from '../models/User';

const SignUp = async (args: SingleuserType): Promise<SingleuserType> => {
  const newUser = await new User(args).save();
  return newUser;
};

export default SignUp;
