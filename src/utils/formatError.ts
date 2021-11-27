import { GraphQLError } from 'graphql';
import { logger } from '@agrarspace/shared';

export default (err: GraphQLError) => {
  if (err.message.startsWith('Database Error: ')) {
    logger.error(`Database Error: ${err.message} >> path: ${err.path}`);
    return new Error('Internal server error');
  }
  if (err.message.startsWith('Security Error: ')) {
    logger.error(`Security Error: ${err.message} >> path: ${err.path}`);
    return new Error('Internal server error');
  }
  return err;
};
