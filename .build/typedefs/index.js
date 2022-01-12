"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var login_1 = __importDefault(require("./auth/login"));
var signUp_1 = require("./auth/signUp");
var user_1 = __importDefault(require("./user"));
var TypeDefs = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    hello: String!\n  }\n  \n  ", "\n  ", "\n\n  type Mutation{\n    ", "\n    ", "\n  }\n"], ["\n  type Query {\n    hello: String!\n  }\n  \n  ", "\n  ", "\n\n  type Mutation{\n    ", "\n    ", "\n  }\n"])), user_1.default, signUp_1.signupResponse, login_1.default, signUp_1.signUp);
exports.default = TypeDefs;
var templateObject_1;
