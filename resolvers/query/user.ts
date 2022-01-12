import { GetAllUser } from '../../controllers/user';
import isValidUser from '../../utils/isValid';

export const hello = () => 'hello';

export const getAllUser = (_parent: any, args: any, context: any) => {
  console.log('context --> ', context.token);
  const res = isValidUser(GetAllUser, context.token);
  return res;
};
