/* eslint-disable new-cap */
import mongoose from 'mongoose';
import User from '../../db/models/User';
import { SingleuserType } from '../../types/userType';

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
  Id: string | any,
  fields: any,
  shouldNew: boolean = true,
) => {
  const res: any = await modelName.findByIdAndUpdate(
    Id,
    { ...fields },
    {
      new: shouldNew,
    },
  );
  return res?._doc;
};

export const findFromDB = async (
  modelName: typeof User,
  filter: 'All' | 'One',
  otherCreds: any,
): Promise<any[] | SingleuserType> => {
  if (filter === 'All') {
    const res: Promise<SingleuserType[]> | any[] | null = await modelName.find(
      {},
    );
    return res;
  }
  if (otherCreds.email) {
    const res: Promise<SingleuserType> | any[] = await modelName.findOne({
      email: otherCreds.email,
    });
    return res;
  }
  if (otherCreds.id) {
    const res: Promise<SingleuserType> | any[] = await modelName.findById({
      _id: otherCreds.id,
    });
    return res;
  }
  if (otherCreds.userName) {
    const res: Promise<SingleuserType> | any[] = await modelName.findOne({
      userName: otherCreds.userName,
    });
    return res;
  }
  return [];
};
