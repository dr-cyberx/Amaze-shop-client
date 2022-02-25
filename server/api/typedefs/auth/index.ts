export const Login: String = `
login(userName: String, email: String, phoneNumber: String, password: String) : authResponse!
`;

export const signUp: String = `
signUp(userName: String, email: String, phoneNumber: String, password: String!, role: userRole) : authResponse!
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

export const verifyResponse: string = `
type verifyResponse{
  status: Int!
  verified: Boolean!
  message: String
}
`;

export const verifyContacts: String = `
 sendOtpNumber(phoneNumber: String): verifyResponse
 verifyOtpNumber(otp: String): verifyResponse
 verifyEmail(email: String, otp: String!): verifyResponse`;
