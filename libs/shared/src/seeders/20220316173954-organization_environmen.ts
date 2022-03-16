import faker from 'faker';
import { QueryInterface } from 'sequelize';

import { fillArr } from '../utils/seed';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const countOfOrganizations = 5;
    const categories: any[] = await queryInterface.sequelize.query(
      `SELECT id FROM "user"
      LIMIT ${countOfOrganizations};`,
    );
    const ids = categories[0];

    const organizations = fillArr(
      countOfOrganizations,
      (_: any, i: number) => ({
        ownerId: ids[i].id,
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    );

    await queryInterface.bulkInsert('organization', organizations);
  },

  down: async (queryInterface: any) => {
    await queryInterface.bulkDelete('organization', null, {});
  },
};
