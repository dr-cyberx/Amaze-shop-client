import { GetAllUser } from '../../controllers/user';
// import isValidUser from '../../utils/isValid';

export const hello = () => 'hello';

export const getAllUser = async (_parent: any, args: any, { token }: any) => {
  const res = await GetAllUser(token);
  console.log('------->> ', res);
  return res.data;
};
