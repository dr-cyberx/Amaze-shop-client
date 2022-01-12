"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: [
        {
            houseNumber: {
                type: String,
            },
            city: {
                type: String,
            },
            street: {
                type: String,
            },
        },
    ],
}, { timestamps: true });
var User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
