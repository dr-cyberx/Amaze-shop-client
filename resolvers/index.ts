import { signUp } from './auth/signUp';

const resolvers = {
  Query: {
    hello: () => 'hello world ',
  },
  Mutation: {
    signUp,
  },
};

export default resolvers;
