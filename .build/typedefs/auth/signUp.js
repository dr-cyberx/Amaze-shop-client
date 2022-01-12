"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = exports.signupResponse = void 0;
exports.signupResponse = "\ntype signupResponse{\n   data: newUser\n   error: Boolean\n   status: Int\n   message: String\n }\n";
exports.signUp = "\nsignUp(userName: String, email: String, phoneNumber: String, password: String!) : signupResponse!\n";
