import SignUp from '../../controllers/auth';
import { ISignUpResolver } from '../../types/authType';
import { SingleuserType } from '../../types/userType';
// import isAuth from '../../utils/Auth';

export const hello = () => 'hello';

export const signUp = (_parents: any, args: SingleuserType): ISignUpResolver => {
  const newUser = SignUp(args);

  return {
    data: newUser?.data || null,
    token: newUser?.token,
    error: false,
    status: 200,
    message: 'signUp successfully',
  };
};
