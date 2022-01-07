/* eslint-disable new-cap */
import User from '../models/User';
import { SingleuserType } from '../types/userType';

export const addUser = (
  modelName: typeof User,
  args: SingleuserType,
): SingleuserType => new modelName(args).save();

export const delUser = () => 'delete User';
