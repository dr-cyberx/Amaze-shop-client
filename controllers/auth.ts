import { SingleuserType } from '../types/userType';
import User from '../models/User';
import { addUser } from '../shared/user';

const SignUp = async (args: SingleuserType): Promise<SingleuserType> => {
  const newUser = await addUser(User, args);
  return newUser;
};

export default SignUp;
