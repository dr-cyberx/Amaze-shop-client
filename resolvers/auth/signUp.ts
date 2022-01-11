import SignUp from '../../controllers/auth';
import { signUpUserInterface } from '../../types/authType';
import { SingleuserType } from '../../types/userType';
// import isAuth from '../../utils/Auth';

export const hello = () => 'hello';

export const signUp = (
  _parents: any,
  args: SingleuserType,
): signUpUserInterface => {
  const newUser: Promise<SingleuserType | null> = SignUp(args);

  return {
    data: newUser || null,
    error: false,
    status: 200,
    message: 'signUp successfully',
  };
};
