import { Culture, logger } from '@agrarspace/shared';

import { Category, CategoryResolvers } from '../../types/graphql';
import { findCulturesByCategoryId } from '../../service/culture';

export default {
  cultures: async (root) => {
    try {
      const cultures = await findCulturesByCategoryId(Culture, root.id);
      if (cultures) return cultures;
      return null;
    } catch (err: Error | unknown) {
      if (err instanceof Error) logger.error(err.message);
      return null;
    }
  },
} as CategoryResolvers<any, Category>;
