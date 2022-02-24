import { IGetAllData, IauthResolver, IVerifiedResponse } from '../../types/authType';
import { SingleuserType } from '../../types/userType';

export const authResponse = (
  message: string = 'Something Went wrong',
  data: SingleuserType | null = null,
  token: string = '',
  error: boolean = true,
  status: number = 400,
): IauthResolver => ({
  data,
  token,
  error,
  status,
  message,
});

export const verifiedResponse = (
  message: string,
  status: number = 400,
  verified: boolean = false,
): IVerifiedResponse => ({
  status,
  verified,
  message,
});

export const amazeResponse = (
  message: string = 'Something Went wrong',
  data: [SingleuserType] | null = null,
  error: boolean = true,
  status: number = 400,
): IGetAllData => ({
  data,
  error,
  status,
  message,
});

export const hello = () => 'hwllo';
