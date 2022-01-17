import { signUp } from './mutation/auth';
import { getAllUser } from './query/user';

const resolvers = {
  Query: {
    hello: () => 'hello world ',
    getAllUser,
  },
  Mutation: {
    signUp,
  },
};

export default resolvers;
