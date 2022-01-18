import { GetAllUser } from '../../../controllers/user';
import { IGetAllUsers } from '../../../types/authType';

export const hello = () => 'hello';

export const getAllUser = async (
  _parent: any,
  { token }: any,
): Promise<IGetAllUsers> => {
  const res: IGetAllUsers = await GetAllUser(token);
  return res;
};
