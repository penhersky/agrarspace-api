import 'dotenv/config';
import http from 'http';
import Koa from 'koa';
import rateLimit from 'koa-ratelimit';
import { ApolloServer } from 'apollo-server-koa';
import { DocumentNode } from 'graphql';
import {
  ApolloServerPluginCacheControl,
  ApolloServerPluginDrainHttpServer,
} from 'apollo-server-core';
import cors from '@koa/cors';
import formatError from './utils/formatError';

import { logger, sequelize } from '@agrarspace/shared';

const getLimiter = (memory: Map<any, any>) =>
  rateLimit({
    duration: 1000 * 60 * 60 * 5,
    errorMessage: 'To Many requests!!!',
    driver: 'memory',
    db: memory,
    max: 300,
    disableHeader: true,
  });

export default (typeDefs: DocumentNode, resolvers: any, stage: string) => {
  const app = new Koa();
  const memory = new Map();
  const httpServer = http.createServer();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (ctx) => ({ ctx }),
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginCacheControl({ defaultMaxAge: 0 }),
    ],
    formatError,
  });

  const start = async () => {
    await server.start();
  };

  const connectMiddleware = () => {
    app.use(cors());
    app.use(getLimiter(memory));
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
