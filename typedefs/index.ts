import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';
import Login from './auth/login';
import { signUp, signupResponse } from './auth/signUp';
import newUser from './user';

const TypeDefs: DocumentNode = gql`
  type Query {
    hello: String!
  }
  
  ${newUser}
  ${signupResponse}

  type Mutation{
    ${Login}
    ${signUp}
  }
`;

export default TypeDefs;
