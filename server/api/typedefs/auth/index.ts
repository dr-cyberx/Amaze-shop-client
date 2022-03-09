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

export const sendOtpToContacts: String = `
 sendOtpNumber(phoneNumber: String): verifyResponse
 sendOtpEmail(email: String): verifyResponse`;

export const verifyContacts: String = `
 verifyOtpNumber(otp: String): verifyResponse
 verifyEmail(otp: String): verifyResponse`;
