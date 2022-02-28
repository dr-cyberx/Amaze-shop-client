import authMutations from './mutation/auth';
import ProductMutations from './mutation/Product';
import { productquery } from './query/Product';
import { getAllUser } from './query/user';

const resolvers = {
  Query: {
    hello: () => 'hello world ',
    getAllUser,
    ...productquery,
  },
  Mutation: {
    ...authMutations,
    ...ProductMutations,
  },
};

export default resolvers;
