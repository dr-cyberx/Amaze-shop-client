import express, { Application } from 'express';
import Resolvers from '../resolvers/index';
import TypeDefs from '../typedefs/index';
import startApolloServer from './initializeServer';

const app: Application = express();

startApolloServer(TypeDefs, Resolvers, app);
