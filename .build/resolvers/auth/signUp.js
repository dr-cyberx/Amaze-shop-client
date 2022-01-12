"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = exports.hello = void 0;
var auth_1 = __importDefault(require("../../controllers/auth"));
// import isAuth from '../../utils/Auth';
var hello = function () { return 'hello'; };
exports.hello = hello;
var signUp = function (_parents, args) {
    var newUser = (0, auth_1.default)(args);
    return {
        data: newUser || null,
        error: false,
        status: 200,
        message: 'signUp successfully',
    };
};
exports.signUp = signUp;
