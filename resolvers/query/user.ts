import { GetAllUser } from '../../controllers/user';
import isValidUser from '../../utils/isValid';

export const hello = () => 'hello';

export const getAllUser = async (_parent: any, args: any, context: any) => {
  const res = await isValidUser(GetAllUser, context.token);
  console.log(res);
  return res?.data;
};
