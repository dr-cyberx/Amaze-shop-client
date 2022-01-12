import { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import http from 'http';
import cors from 'cors';

async function startApolloServer(
  typeDefs: any,
  resolvers: any,
  app: Application,
) {
  const corsOptions = {
    origin: '*',
    credential: true,
  };

  app.use(cors(corsOptions));

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ token: req.headers.authorization || null }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({
    app,
    path: '/amazeshop',
  });

  await new Promise<void>((resolve) => {
    httpServer.listen({ port: 4000 }, resolve);
  });
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

export default startApolloServer;
