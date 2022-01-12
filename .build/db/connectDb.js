"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var connectDB = function (uri) { return new Promise(function (resolve, reject) {
    (0, mongoose_1.connect)(uri)
        .then(function () {
        resolve('connect to DB');
    })
        .catch(function (err) {
        reject(err);
    });
}); };
exports.default = connectDB;
