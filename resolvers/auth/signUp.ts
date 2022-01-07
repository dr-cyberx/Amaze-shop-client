import SignUp from '../../controllers/auth';
import { SingleuserType } from '../../types/userType';

export const hello = () => 'hello';

export const signUp = (_parents: any, args: SingleuserType) => {
  const newUser = SignUp(args);
  return newUser;
};
