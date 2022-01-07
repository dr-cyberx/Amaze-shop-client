import SignUp from '../../controllers/User';
import { SingleuserType } from '../../types/userType';

export const hello = () => 'hello';

export const signUp = (_parents: any, args: SingleuserType, context: any) => {
  const newUser = SignUp(args);
  return newUser;
};
