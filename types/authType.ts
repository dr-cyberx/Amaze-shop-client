import { SingleuserType } from './userType';

export interface signUpUserInterface {
  data: SingleuserType | null;
  status: number;
  message: string;
  error: boolean;
}

export interface ISignup extends SingleuserType {
  token: String;
}
