"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFromDB = exports.UpdateToDB = exports.delFromDB = exports.addToDB = void 0;
var addToDB = function (modelName, args) { return new modelName(args).save(); };
exports.addToDB = addToDB;
var delFromDB = function (modelName, Id) {
    var res = modelName.findByIdAndRemove(Id);
    return res === null || res === void 0 ? void 0 : res._doc;
};
exports.delFromDB = delFromDB;
var UpdateToDB = function (modelName, Id) {
    var res = modelName.findByIdAndUpdate(Id);
    return res === null || res === void 0 ? void 0 : res._doc;
};
exports.UpdateToDB = UpdateToDB;
var findFromDB = function (modelName, Id) {
    var res = modelName.findById(Id);
    return res;
};
exports.findFromDB = findFromDB;
