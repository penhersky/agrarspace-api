import 'dotenv/config';
import http from 'http';
import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { DocumentNode, GraphQLSchema } from 'graphql';
import {
  ApolloServerPluginCacheControl,
  ApolloServerPluginDrainHttpServer,
} from 'apollo-server-core';
import { makeExecutableSchema } from '@graphql-tools/schema';
import cors from '@koa/cors';

import formatError from './utils/formatError';
import { apolloContext } from './utils/createContext';
import { authDirective } from './directives/auth';

import { logger, sequelize } from '@agrarspace/shared';

export class Server {
  private app: Koa<Koa.DefaultState, Koa.DefaultContext>;

  private httpsServer: http.Server;

  private schema: GraphQLSchema;

  private server: ApolloServer;

  constructor(
    private readonly typeDefs: DocumentNode,
    private readonly resolvers: any,
    private readonly stage: string,
  ) {
    this.app = new Koa();
    this.httpsServer = http.createServer();

    const { userAuthDirectiveTransformer, userAuthDirectiveTypeDefs } =
      authDirective('auth');

    this.schema = makeExecutableSchema({
      typeDefs: [userAuthDirectiveTypeDefs, typeDefs],
      resolvers,
    });

    this.schema = userAuthDirectiveTransformer(this.schema);

    this.server = new ApolloServer({
      schema: this.schema,
      context: apolloContext,
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer: this.httpsServer }),
        ApolloServerPluginCacheControl({ defaultMaxAge: 1 }),
      ],
      formatError,
    });
  }

  async startConfiguring() {
    await this.server.start();
  }

  connectMiddleware() {
    this.app.use(cors());
  }

  applyGraphQl() {
    this.server.applyMiddleware({ app: this.app, path: '/graphql' });
    this.httpsServer.on('request', this.app.callback());
  }

  connectToDataBase() {
    sequelize
      .authenticate()
      .then(() => {
        logger.info(
          '======================== 🔗 CONNECTED TO DATABASE 🔗 ====================',
        );
      })
      .catch((error: any) => {
        if (this.stage === 'development') logger.error(error.message);
        logger.error('!!!!!Unable to connect to the database!!!!');
      });
  }

  getApp() {
    return { server: this.server, app: this.app };
  }

  async listen(port: number) {
    await new Promise((resolve: any) =>
      this.httpsServer.listen({ port }, resolve),
    );
    logger.info(
      `=========================== 🚀 SERVER READY AT 🚀 =======================`,
    );
    logger.info(
      `======================= http://localhost:${port}${this.server.graphqlPath} ===================`,
    );
    logger.info(
      `============================= STAGE: ${this.stage} ========================`,
    );
  }
}
