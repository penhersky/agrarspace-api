import 'dotenv/config';
import http from 'http';
import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { DocumentNode } from 'graphql';
import {
  ApolloServerPluginCacheControl,
  ApolloServerPluginDrainHttpServer,
} from 'apollo-server-core';
import cors from '@koa/cors';
import formatError from './utils/formatError';
import { apolloContext } from './utils/createContext';

import { logger, sequelize } from '@agrarspace/shared';

export default (typeDefs: DocumentNode, resolvers: any, stage: string) => {
  const app = new Koa();
  const httpServer = http.createServer();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: apolloContext,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginCacheControl({ defaultMaxAge: 1 }),
    ],
    formatError,
  });

  const start = async () => {
    await server.start();
  };

  const connectMiddleware = () => {
    app.use(cors());
  };

  const apply = () => {
    server.applyMiddleware({ app, path: '/graphql' });
    httpServer.on('request', app.callback());
  };

  const connectDB = () => {
    sequelize
      .authenticate()
      .then(() => {
        logger.info(
          '======================== 🔗 CONNECTED TO DATABASE 🔗 ====================',
        );
      })
      .catch((error: any) => {
        if (stage === 'development') logger.error(error.message);
        logger.error('!!!!!Unable to connect to the database!!!!');
      });
  };

  const getApp = () => ({ server, app });

  const listen = async (port: number) => {
    await new Promise((resolve: any) => httpServer.listen({ port }, resolve));
    logger.info(
      `=========================== 🚀 SERVER READY AT 🚀 =======================`,
    );
    logger.info(
      `======================= http://localhost:${port}${server.graphqlPath} ===================`,
    );
    logger.info(
      `============================= STAGE: ${stage} ========================`,
    );
  };

  return {
    connectMiddleware,
    apply,
    connectDB,
    getApp,
    listen,
    start,
  };
};
