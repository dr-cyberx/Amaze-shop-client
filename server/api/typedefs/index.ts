import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';
import {
  Login,
  signUp,
  authResponse,
  verifyContacts,
  verifyResponse,
  sendOtpToContacts,
} from './auth/index';
import {
  createProduct,
  createProductInput,
  createProductResponse,
  getAllProducts,
  updateProduct,
} from './Product';
import getAllUser from './user/query';
import { getAllUserResponse, newUser, userRole } from './user/types';

const TypeDefs: DocumentNode = gql`
  type Query {
    hello: String!
    ${getAllUser}
    ${getAllProducts}
    ${sendOtpToContacts}
  }

  ${newUser}
  ${getAllUserResponse}
  ${userRole}
  ${authResponse}
  ${createProductInput}
  ${createProductResponse}
  ${verifyResponse}

  type Mutation{
    ${Login}
    ${signUp}
    ${verifyContacts}
    ${createProduct}
    ${updateProduct}
  }
`;

export default TypeDefs;
