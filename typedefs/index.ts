import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';
import Login from './auth/login';
import signUp from './auth/signUp';

const TypeDefs: DocumentNode = gql`
  type Query {
    hello: String!
  }
  type newUser{
      id: ID!
      userName: String
      email: String
      password: String
      phoneNumber: String
    }
  type Mutation{
    ${Login}
    ${signUp}
  }
`;

export default TypeDefs;
