import faker from 'faker';

import { fillArr } from '../utils/seed';

module.exports = {
  up: async (queryInterface: any) => {
    await queryInterface.bulkInsert(
      'category',
      fillArr(11, () => ({
        name: faker.commerce.product(),
        image: faker.image.nature(),
        color: faker.commerce.color(),
        description: faker.lorem.text(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  down: async (queryInterface: any) => {
    await queryInterface.bulkDelete('category', null, {});
  },
};
