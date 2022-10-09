import { Culture, logger, Category } from '@agrarspace/shared';

import { Culture as TCulture, CultureResolvers } from '../../types/graphql';
import { findCulturesByParentId } from '../../service/culture';
import { findCategoryById } from '../../service/category';

interface TCultureWithCategoryId extends TCulture {
  categoryId?: string;
}

export default {
  subcultures: async (root) => {
    try {
      const cultures = await findCulturesByParentId(Culture, root.id);
      if (cultures) return cultures;
      return null;
    } catch (err: Error | unknown) {
      if (err instanceof Error) logger.error(err.message);
      return null;
    }
  },
  category: async (root) => {
    if (!root.categoryId) return null;
    try {
      const cultures = await findCategoryById(Category, root.categoryId);
      if (cultures) return cultures;
      return null;
    } catch (err: Error | unknown) {
      if (err instanceof Error) logger.error(err.message);
      return null;
    }
  },
} as CultureResolvers<any, TCultureWithCategoryId>;
