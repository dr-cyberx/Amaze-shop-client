import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';
import Login from './auth/login';
import { signUp, signupResponse } from './auth/signUp';
import getAllUser from './user/query';
import newUser from './user/types';

const TypeDefs: DocumentNode = gql`
  type Query {
    hello: String!
    ${getAllUser}
  }
  
  ${newUser}
  ${signupResponse}

  type Mutation{
    ${Login}
    ${signUp}
  }
`;

export default TypeDefs;
