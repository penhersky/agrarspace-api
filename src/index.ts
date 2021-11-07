import serverLauncher from './server';
import resolvers from './resolvers';
import typeDefs from './typeDefs';
import { PORT, NODE_ENV } from './config';

const application = async () => {
  const server = serverLauncher(typeDefs, resolvers, NODE_ENV as string);

  await server.start();
  server.connectMiddleware();
  server.connectDB();
  server.apply();
  await server.listen(PORT as number);
};

application();
