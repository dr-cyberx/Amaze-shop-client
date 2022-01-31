import { GetAllUser } from '../../../controllers/user';
import { IGetAllData } from '../../../types/authType';

export const hello = () => 'hello';

export const getAllUser = async (
  _parent: any,
  args: any,
  { token }: any,
): Promise<IGetAllData> => {
  const res: IGetAllData = await GetAllUser(token);
  return res;
};
