import {
  Login,
  SignUp,
  VerifyEmail,
  SendOtpNumber,
  VerifyOtpNumber,
  SendOtpEmail,
} from '../../../controllers/auth';
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

  sendOtpNumber: async (
    _parents: any,
    args: any,
    { token }: any,
  ): Promise<IVerifiedResponse> => {
    const verifiedRespose: IVerifiedResponse = await SendOtpNumber(args, token);
    return verifiedRespose;
  },

  verifyOtpNumber: async (
    _parents: any,
    args: any,
    { token }: any,
  ): Promise<IVerifiedResponse> => {
    const verifiedNumberResponse: IVerifiedResponse = await VerifyOtpNumber(
      args,
      token,
    );
    return verifiedNumberResponse;
  },

  sendOtpEmail: async (
    _parents: any,
    args: any,
    { token }: any,
  ): Promise<IVerifiedResponse> => {
    const verifiedRespose: IVerifiedResponse = await SendOtpEmail(args, token);
    return verifiedRespose;
  },

  verifyEmail: async (
    _parents: any,
    args: any,
    { token }: any,
  ): Promise<IVerifiedResponse> => {
    const verifiedRespose: IVerifiedResponse = await VerifyEmail(args, token);
    return verifiedRespose;
  },
};

export default authMutations;
