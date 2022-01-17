import { signUp, login } from './mutation/auth';
import { getAllUser } from './query/user';

const resolvers = {
  Query: {
    hello: () => 'hello world ',
    getAllUser,
  },
  Mutation: {
    signUp,
    login,
  },
};

export default resolvers;
