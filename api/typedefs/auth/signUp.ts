export const signupResponse: String = `
type signupResponse{
   data: newUser
   error: Boolean
   token: String
   status: Int
   message: String
 }
`;

export const signUp: String = `
signUp(userName: String, email: String, phoneNumber: String, password: String!, Role: userRole) : signupResponse!
`;
