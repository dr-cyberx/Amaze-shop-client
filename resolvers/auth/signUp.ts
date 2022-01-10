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
      error: false,
      status: 200,
      message: 'signUp successfully',
    };
  }
  return {
    data: null,
    error: false,
    status: 400,
    message: 'signUp failed',
  };
};
