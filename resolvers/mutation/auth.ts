import SignUp from '../../controllers/auth';
import { ISignUpResolver } from '../../types/authType';
import { SingleuserType } from '../../types/userType';
// import isAuth from '../../utils/Auth';

export const hello = () => 'hello';

export const signUp = async (
  _parents: any,
  args: SingleuserType,
): Promise<ISignUpResolver> => {
  const newUser: ISignUpResolver = await SignUp(args);
  return newUser;
};
