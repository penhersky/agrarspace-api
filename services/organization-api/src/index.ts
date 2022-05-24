import { Server } from './server';
import { resolvers } from './resolvers';
import typeDefs from './typeDefs';
import { PORT, NODE_ENV } from './utils/config';

const application = async () => {
  const server = new Server(typeDefs, resolvers, NODE_ENV as string);

  await server.startConfiguring();
  server.connectMiddleware();
  server.connectToDataBase();
  server.applyGraphQl();
  await server.listen(PORT as number);
};

application();
