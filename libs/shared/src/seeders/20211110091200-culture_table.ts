import faker from 'faker';
import { QueryInterface } from 'sequelize';

import { fillArr, getRandom } from '../utils/seed';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const categories: any[] = await queryInterface.sequelize.query(
      `SELECT id from category;`,
    );
    const ids = categories[0];
    await queryInterface.bulkInsert(
      'culture',
      fillArr(50, () => ({
        name: faker.commerce.productName(),
        image: faker.image.food(),
        description: faker.lorem.text(),
        categoryId: getRandom(ids).id || ids[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  down: async (queryInterface: any) => {
    await queryInterface.bulkDelete('culture', null, {});
  },
};
