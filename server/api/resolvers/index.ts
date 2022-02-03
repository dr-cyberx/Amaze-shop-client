import authMutations from './mutation/auth';
import ProductMutations from './mutation/Product';
import { getAllUser } from './query/user';

const resolvers = {
  Query: {
    hello: () => 'hello world ',
    getAllUser,
  },
  Mutation: {
    ...authMutations,
    ...ProductMutations,
  },
};

export default resolvers;
