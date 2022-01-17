import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';
import { Login, signUp, authResponse } from './auth/index';
import getAllUser from './user/query';
import { getAllUserResponse, newUser, userRole } from './user/types';

const TypeDefs: DocumentNode = gql`
  type Query {
    hello: String!
    ${getAllUser}
  }
  
  ${newUser}
  ${getAllUserResponse}
  ${userRole}
  ${authResponse}

  type Mutation{
    ${Login}
    ${signUp}
  }
`;

export default TypeDefs;
