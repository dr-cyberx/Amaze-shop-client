import { signUp } from './mutation/auth';
import UserQuery from './query/user';

const resolvers = {
  Query: {
    hello: () => 'hello world ',
    ...UserQuery,
  },
  Mutation: {
    signUp,
  },
};

export default resolvers;
