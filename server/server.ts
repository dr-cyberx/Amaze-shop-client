import express, { Application } from 'express';
import dotenv from 'dotenv';
import Resolvers from '../resolvers/index';
import TypeDefs from '../typedefs/index';
import startApolloServer from './initializeServer';

dotenv.config();

const app: Application = express();

startApolloServer(TypeDefs, Resolvers, app);
