export const Login: String = `
login(userName: String, email: String, phoneNumber: String, password: String) : authResponse!
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

export const verifyContacts: String = `
 verifyNumber(phoneNumber: String): authResponse
 verifyEmail(email: String): authResponse`;
