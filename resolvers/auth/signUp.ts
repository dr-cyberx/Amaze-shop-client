import SignUp from '../../controllers/auth';
import { ISignUpResolver } from '../../types/authType';
import { SingleuserType } from '../../types/userType';
// import isAuth from '../../utils/Auth';

export const hello = () => 'hello';

export const signUp = async (
  _parents: any,
  args: SingleuserType,
): Promise<ISignUpResolver> => {
  try {
    const newUser = await SignUp(args);

    return {
      data: newUser?.data || null,
      token: newUser?.token,
      error: false,
      status: 200,
      message: 'signUp successfully',
    };
  } catch (err) {
    console.log(err);
    return {
      data: null,
      token: '',
      error: true,
      status: 400,
      message: 'signUp failed',
    };
  }
};
