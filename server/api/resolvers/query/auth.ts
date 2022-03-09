import { SendOtpEmail, SendOtpNumber } from '../../../controllers/auth';
import { IVerifiedResponse } from '../../../types/authType';

const otpQueries = {
  sendOtpNumber: async (
    _parents: any,
    args: any,
    { token }: any,
  ): Promise<IVerifiedResponse> => {
    const verifiedRespose: IVerifiedResponse = await SendOtpNumber(args, token);
    return verifiedRespose;
  },

  sendOtpEmail: async (
    _parents: any,
    args: any,
    { token }: any,
  ): Promise<IVerifiedResponse> => {
    const verifiedRespose: IVerifiedResponse = await SendOtpEmail(args, token);
    return verifiedRespose;
  },
};

export default otpQueries;
