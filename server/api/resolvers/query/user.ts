import { GetAllUser } from '../../../controllers/user';
import { IGetAllData } from '../../../types/authType';
import { Type_Create_Update_Product } from '../../../types/ProductType';

export const hello = () => 'hello';

export const getAllUser = async (
  _parent: any,
  args: any,
  { token }: any,
): Promise<IGetAllData | Type_Create_Update_Product> => {
  const res: IGetAllData | Type_Create_Update_Product = await GetAllUser(token);
  return res;
};
