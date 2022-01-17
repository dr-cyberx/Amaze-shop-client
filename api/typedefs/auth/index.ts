export const Login: String = `
Login(userName: String, email: String, phoneNumber: String, password: String) : authResponse!
`;

export const signUp: String = `
signUp(userName: String, email: String, phoneNumber: String, password: String!, Role: userRole) : authResponse!
`;

export const authResponse: String = `
type authResponse{
   data: newUser
   error: Boolean
   token: String
   status: Int
   message: String
 }
`;
