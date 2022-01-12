"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signUp_1 = require("./auth/signUp");
var resolvers = {
    Query: {
        hello: function () { return 'hello world '; },
    },
    Mutation: {
        signUp: signUp_1.signUp,
    },
};
exports.default = resolvers;
