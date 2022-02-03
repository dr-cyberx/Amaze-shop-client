import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';
import { Login, signUp, authResponse } from './auth/index';
import { createProduct } from './Product/query';
import { createProductInput, createProductResponse } from './Product/types';
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
  ${createProductInput}
  ${createProductResponse}

  type Mutation{
    ${Login}
    ${signUp}
    ${createProduct}
  }
`;

export default TypeDefs;
