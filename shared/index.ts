/* eslint-disable new-cap */
import mongoose from 'mongoose';
import User from '../models/User';
import { SingleuserType } from '../types/userType';

export const addToDB = async (modelName: typeof User, args: SingleuserType) => {
  const res: any = await new modelName(args).save();
  return res;
};

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
  email?: string,
  Id?: mongoose.Types.ObjectId,
): Promise<any[] | SingleuserType> => {
  if (filter === 'All') {
    const res: Promise<SingleuserType[]> | any[] | null = await modelName.find(
      {},
    );
    return res;
  }
  if (!email) {
    const res: Promise<SingleuserType> | any[] = await modelName.findById({
      Id,
    });
    return res;
  }
  const res: Promise<SingleuserType> | any[] = await modelName.find({
    email,
  });
  return res;
};
