import faker from 'faker';
import { QueryInterface } from 'sequelize';

import { fillArr, getRandom } from '../utils/seed';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const categories: any[] = await queryInterface.sequelize.query(
      `SELECT id from category;`,
    );
    const ids = categories[0];

    const parents = fillArr(40, () => ({
      name: faker.commerce.productName(),
      image: faker.image.food(),
      description: faker.lorem.text(),
      categoryId: getRandom(ids).id || ids[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    const children = fillArr(20, () => ({
      name: faker.commerce.productName(),
      image: faker.image.food(),
      description: faker.lorem.text(),
      categoryId: getRandom(ids).id || ids[0].id,
      parentId: getRandom(parents).id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('culture', [...parents, ...children]);
  },

  down: async (queryInterface: any) => {
    await queryInterface.bulkDelete('culture', null, {});
  },
};
