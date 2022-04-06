import faker from 'faker';
import { QueryInterface } from 'sequelize';

import { fillArr, getRandom, randomIntFromInterval } from '../utils/seed';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const cultures: any[] = await queryInterface.sequelize.query(
      `SELECT id from culture;`,
    );
    const organizations: any[] = await queryInterface.sequelize.query(
      `SELECT id from organization;`,
    );
    const plantations: any[] = await queryInterface.sequelize.query(
      `SELECT id, "areaSize" from plantation;`,
    );

    const culturesIds = cultures[0];
    const organizationsIds = organizations[0];
    const plantationIds = plantations[0];
    await queryInterface.bulkInsert(
      'yield',
      fillArr(5000, () => {
        const interval = randomIntFromInterval(50, 80);

        const dateOfSowingStart = faker.date.past(10, new Date(2022, 1, 1));
        const month = randomIntFromInterval(3, 6);
        dateOfSowingStart.setMonth(month);
        const dateOfSowingEnd = new Date(dateOfSowingStart);
        dateOfSowingEnd.setHours(dateOfSowingStart.getHours() + interval);

        const dateOfCollectionStart = new Date(dateOfSowingStart);
        dateOfCollectionStart.setMonth(month + randomIntFromInterval(3, 6));
        const dateOfCollectionEnd = new Date(dateOfCollectionStart);
        dateOfCollectionEnd.setHours(
          dateOfCollectionEnd.getHours() +
            (interval +
              faker.datatype.number({
                min: Math.floor(interval / 100) * 5,
                max: Math.floor(interval / 100) * 25,
              })),
        );

        const plantation = getRandom(plantationIds) || plantationIds[0];
        const plantedArea = faker.datatype.number(plantation.areaSize);

        const plantedWeight =
          plantedArea *
          faker.datatype.float({
            max: 1,
            min: 0.01,
            precision: 0.5,
          });

        const collectedWeight = Math.floor(
          plantedWeight *
            faker.datatype.float({ max: 11.1, min: 0.5, precision: 6 }),
        );

        return {
          organizationId:
            getRandom(organizationsIds).id || organizationsIds[0].id,
          cultureId: getRandom(culturesIds).id || culturesIds[0].id,
          plantationId: plantation.id,
          plantedArea,
          plantedWeight,
          collectedWeight,
          dateOfSowingStart,
          dateOfSowingEnd,
          dateOfCollectionStart,
          dateOfCollectionEnd,
          description: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      }),
    );
    await queryInterface.bulkDelete('yield', { collectedWeight: 0 }, {});
  },

  down: async (queryInterface: any) => {
    await queryInterface.bulkDelete('yield', null, {});
  },
};
