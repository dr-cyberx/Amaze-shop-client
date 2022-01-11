import { signUp } from './auth/signUp';
import UserQuery from './user';

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
