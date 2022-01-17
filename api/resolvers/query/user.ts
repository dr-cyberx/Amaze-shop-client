import { GetAllUser } from '../../../controllers/user';

export const hello = () => 'hello';

export const getAllUser = async (_parent: any, args: any, { token }: any) => {
  const res = await GetAllUser(token);
  return res;
};
