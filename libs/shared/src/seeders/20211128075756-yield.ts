import faker from 'faker';
import { QueryInterface } from 'sequelize';

import { fillArr, getRandom } from '../utils/seed';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const cultures: any[] = await queryInterface.sequelize.query(
      `SELECT id from culture;`,
    );
    const users: any[] = await queryInterface.sequelize.query(
      `SELECT id from public."user";`,
    );

    const culturesIds = cultures[0];
    const userIds = users[0];
    await queryInterface.bulkInsert(
      'yield',
      fillArr(1000, () => ({
        cultureId: getRandom(culturesIds).id || culturesIds[0].id,
        userId: getRandom(userIds).id || userIds[0].id,
        area: faker.datatype.float({ max: 1000, min: 0.1 }),
        plantedWeight: faker.datatype.float({ max: 100, min: 0.001 }),
        collectedWeight: faker.datatype.float({ max: 100, min: 0.001 }),
        dateOfSubmission: faker.date.past(5, new Date(2022, 1, 1)),
        description: faker.lorem.text(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  down: async (queryInterface: any) => {
    await queryInterface.bulkDelete('yield', null, {});
  },
};
