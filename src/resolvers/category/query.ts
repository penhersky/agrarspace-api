import { Category } from '@agrarspace/shared';

import { GetCategoriesResolver } from '../../types/resolvers';
import { findAllCategories } from '../../service/category';

export const getCategories: GetCategoriesResolver = async () => {
  return (await findAllCategories(Category)) || [];
};
