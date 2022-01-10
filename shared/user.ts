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
