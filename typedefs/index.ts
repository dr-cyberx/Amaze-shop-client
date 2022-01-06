import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

const TypeDefs: DocumentNode = gql`
  type Query {
    hello: String!
  }
`;

export default TypeDefs;
