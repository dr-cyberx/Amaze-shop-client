export const newUser: string = `  type newUser{
   id: ID!
   userName: String
   email: String
   password: String
   phoneNumber: String
   role:String
 }`;

export const userRole: string = `
 enum userRole{
   BUYER,
   SELLER
 }
`;
