import faker from 'faker';
import { QueryInterface } from 'sequelize';

import { fillArr, getRandom, randomIntFromInterval } from '../utils/seed';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const organizations: any[] = await queryInterface.sequelize.query(
      `SELECT id FROM "organization";`,
    );
    const ids = organizations[0];

    const plantation = fillArr(200, () => {
      return {
        name: `${faker.address.streetName()} ${randomIntFromInterval(0, 5)}`,
        organizationId: getRandom(ids).id || ids[0].id,
        areaSize: faker.datatype.number(250),
        region: `${faker.address.country()}, ${faker.address.city()}, ${faker.address.streetName()} ${randomIntFromInterval(
          0,
          5,
        )}`,
        description: faker.commerce.productDescription(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert('plantation', plantation);
  },

  down: async (queryInterface: any) => {
    await queryInterface.bulkDelete('plantation', null, {});
  },
};
