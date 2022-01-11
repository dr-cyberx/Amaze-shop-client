import User from '../models/User';
import { findAllFromDB } from '../shared/user';
import { SingleuserType } from '../types/userType';

const UserQuery = {
  getAllUser: async (): Promise<SingleuserType[] | null> => {
    try {
      const res: Promise<SingleuserType[]> = findAllFromDB(User);
      return res;
    } catch (err) {
      return null;
    }
  },
};

export default UserQuery;
