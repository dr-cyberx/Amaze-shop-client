export const createProductInput = `input createProductInput{
   productName: String!
   productImage: String!
   productDescription: String!
   productPrice: String!
   productSeller: String!
   productRating: Int!
}`;

export const createProductResponse = `type createProductResponse{
   id: ID!
   productName: String!
   productImage: String!
   productDescription: String!
   productPrice: String!
   productSeller: String!
   productRating: Int!
}`;

export const hello = 'hello';
