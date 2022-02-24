import { Login, SignUp, VerifyNumber } from '../../../controllers/auth';
import { IauthResolver, IVerifiedResponse } from '../../../types/authType';
import { SingleuserType } from '../../../types/userType';

const authMutations = {
  signUp: async (
    _parents: any,
    args: SingleuserType,
  ): Promise<IauthResolver> => {
    const newUser: IauthResolver = await SignUp(args);
    return newUser;
  },

  login: async (
    _parents: any,
    args: SingleuserType,
  ): Promise<IauthResolver> => {
    const User: IauthResolver = await Login(args);
    return User;
  },

  verifyNumber: async (
    _parents: any,
    args: any,
    { token }: any,
  ): Promise<IVerifiedResponse> => {
    const verifiedRespose: IVerifiedResponse = await VerifyNumber(args, token);
    return verifiedRespose;
  },
  verifyEmail: async () => 'hello',
};

export default authMutations;
