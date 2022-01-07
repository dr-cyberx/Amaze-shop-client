import express, { Application } from 'express';
import dotenv from 'dotenv';
import Resolvers from '../resolvers/index';
import TypeDefs from '../typedefs';
import startApolloServer from './initializeServer';
import connectDB from '../db/connectDb';

dotenv.config();

const app: Application = express();

connectDB(`${process.env.MongoDB_URL}`)
  .then(() => {
    startApolloServer(TypeDefs, Resolvers, app);
  })
  .catch((err) => {
    console.log('failed to connect DB ', err);
  });
