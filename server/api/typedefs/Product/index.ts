export const createProduct: string =
  'createProduct(input: createProductInput!) : createProductMutationResponse ';

export const updateProduct: string =
  'updateProduct(productId: String, input: createProductInput!) : createProductMutationResponse ';

export const createProductInput: string = `input createProductInput{
  productName: String!
  productImage: String!
  productDescription: String!
  productPrice: String!
  productSeller: String!
  productRating: Int!
}`;

export const createProductResponse: string = `

type createProductResponse{
  id: ID!
  productName: String!
  productImage: String!
  productDescription: String!
  productPrice: String!
  productSeller: String!
  productRating: Int!
}

type createProductMutationResponse{
  data: createProductResponse
  error: Boolean!
  message: String!
  status: Int!
}

`;

export const getAllProducts: string = `
  getallproducts: [createProductResponse]!
`;

export const hello = 'hello';
