import SignUp from '../../controllers/auth';
import {
  signUpUserInterface,
  signUpUserNullInterface,
} from '../../types/authType';
import { SingleuserType } from '../../types/userType';
// import isAuth from '../../utils/Auth';

export const hello = () => 'hello';

export const signUp = (
  _parents: any,
  args: SingleuserType,
): signUpUserInterface | signUpUserNullInterface => {
  const newUser = SignUp(args);

  if (newUser) {
    return {
      data: newUser,
      status: 200,
      message: 'signUp successfully',
      error: false,
    };
  }
  return {
    data: null,
    status: 400,
    message: 'signUp failed',
    error: false,
  };
};
