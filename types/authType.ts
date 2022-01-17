import { SingleuserType } from './userType';

export interface commonResponse {
  status: number;
  message: string;
  error: boolean;
}

export interface signUpUserInterface extends commonResponse {
  data: SingleuserType | null;
}

export interface IGetAllUsers extends commonResponse {
  data: [SingleuserType] | null;
}

export interface ISignup extends SingleuserType {
  token: String;
}

export interface ISignUpResolver extends signUpUserInterface {
  token: string | undefined;
}
