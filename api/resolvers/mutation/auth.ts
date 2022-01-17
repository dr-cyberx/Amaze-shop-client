import { Login, SignUp } from '../../../controllers/auth';
import { IauthResolver } from '../../../types/authType';
import { SingleuserType } from '../../../types/userType';

export const signUp = async (
  _parents: any,
  args: SingleuserType,
): Promise<IauthResolver> => {
  const newUser: IauthResolver = await SignUp(args);
  return newUser;
};

export const login = async (
  _parents: any,
  args: SingleuserType,
): Promise<IauthResolver> => {
  const User: IauthResolver = await Login(args);
  return User;
};
