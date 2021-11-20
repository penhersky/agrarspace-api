import { GraphQLError } from 'graphql';

export default (err: GraphQLError) => {
  if (err.message.startsWith('Database Error: ')) {
    return new Error('Internal server error');
  }
  return err;
};
