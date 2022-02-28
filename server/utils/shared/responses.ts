import {
  IGetAllData,
  IauthResolver,
  IVerifiedResponse,
} from '../../types/authType';
import { TypeProduct, Type_Create_Update_Product } from '../../types/ProductType';
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
  data: [SingleuserType] | null | TypeProduct[] = null,
  error: boolean = true,
  status: number = 400,
): IGetAllData | Type_Create_Update_Product => ({
  data,
  error,
  status,
  message,
});

export const hello = () => 'hwllo';
