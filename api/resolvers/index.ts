import authMutations from './mutation/auth';
import { getAllUser } from './query/user';

const resolvers = {
  Query: {
    hello: () => 'hello world ',
    getAllUser,
  },
  Mutation: {
    ...authMutations,
  },
};

export default resolvers;
