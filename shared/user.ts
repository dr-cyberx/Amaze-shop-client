/* eslint-disable new-cap */
import mongoose from 'mongoose';
import User from '../models/User';
import { SingleuserType } from '../types/userType';

export const addToDB = (
  modelName: typeof User,
  args: SingleuserType,
): SingleuserType => new modelName(args).save();

export const delFromDB = (
  modelName: typeof User,
  Id: mongoose.Types.ObjectId,
) => {
  const res: any = modelName.findByIdAndRemove(Id);
  return res?._doc;
};

export const UpdateToDB = (
  modelName: typeof User,
  Id: mongoose.Types.ObjectId,
) => {
  const res: any = modelName.findByIdAndUpdate(Id);
  return res?._doc;
};

export const findFromDB = (
  modelName: typeof User,
  Id: mongoose.Types.ObjectId,
) => {
  const res: any = modelName.findById(Id);
  return res;
};

export const findAllFromDB = async (modelName: typeof User) => {
  const res: any = await modelName.find({});
  return res;
};
