/* eslint-disable new-cap */
import mongoose from 'mongoose';
import User from '../models/User';
import { SingleuserType } from '../types/userType';

export const addToDB = (
  modelName: typeof User,
  args: SingleuserType,
): SingleuserType => new modelName(args).save();

export const delFromDB = async (
  modelName: typeof User,
  Id: mongoose.Types.ObjectId,
) => {
  const res: any = await modelName.findByIdAndRemove(Id);
  return res?._doc;
};

export const UpdateToDB = async (
  modelName: typeof User,
  Id: mongoose.Types.ObjectId,
) => {
  const res: any = await modelName.findByIdAndUpdate(Id);
  return res?._doc;
};

export const findFromDB = async (
  modelName: typeof User,
  filter: 'All' | 'One',
  Id?: mongoose.Types.ObjectId,
) => {
  if (filter === 'All') {
    const res: Promise<SingleuserType[]> | any[] | null = await modelName.find({});
    return res;
  }
  const res: Promise<SingleuserType> = await modelName.findById(Id);
  return res;
};
