import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';
import Login from './auth/login';
import { signUp, signupResponse } from './auth/signUp';
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
  ${signupResponse}

  type Mutation{
    ${Login}
    ${signUp}
  }
`;

export default TypeDefs;
