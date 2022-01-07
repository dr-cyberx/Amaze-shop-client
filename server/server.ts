import express, { Application } from 'express';
import dotenv from 'dotenv';
import Resolvers from '../resolvers/index';
import TypeDefs from '../typedefs/index';
import startApolloServer from './initializeServer';
import connectDB from '../db/connectDb';

dotenv.config();

const app: Application = express();

connectDB(`${process.env.MONGO_URL}`)
  .then((message) => {
    startApolloServer(TypeDefs, Resolvers, app);
    console.log(message);
  })
  .catch((err) => {
    console.log('failed to connect DB ', err);
  });
