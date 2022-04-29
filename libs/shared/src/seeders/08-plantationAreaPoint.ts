import faker from 'faker';
import { QueryInterface } from 'sequelize';

import { getRandom, randomIntFromInterval } from '../utils/seed';

const defaultCr = [
  // +- 500-1000
  {
    lat: 49.735136,
    lng: 23.208033,
  },
  {
    lat: 49.749472,
    lng: 23.20807,
  },
  {
    lat: 49.776713,
    lng: 24.516535,
  },
  {
    lat: 49.802222,
    lng: 24.628198,
  },
  {
    lat: 49.739043,
    lng: 26.167484,
  },
  {
    lat: 49.293713,
    lng: 25.439498,
  },
  {
    lat: 48.833359,
    lng: 24.837227,
  },
  {
    lat: 48.677607,
    lng: 25.329023,
  },
  {
    lat: 48.732338,
    lng: 25.492067,
  },
  {
    lat: 49.162717,
    lng: 28.968913,
  },
  {
    lat: 48.377019,
    lng: 32.258999,
  },
];

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const plantations: any[] = await queryInterface.sequelize.query(
      `SELECT id FROM "plantation";`,
    );
    const ids = plantations[0];

    const organizations: any[][] = ids.map((plantation: any) => {
      const center = getRandom(defaultCr);
      return [
        {
          plantationId: plantation.id,
          lat: center.lat + randomIntFromInterval(500, 1000) / 100_0000,
          lng: center.lng + randomIntFromInterval(500, 1000) / 100_0000,
          description: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          plantationId: plantation.id,
          lat: center.lat - randomIntFromInterval(500, 1000) / 100_0000,
          lng: center.lng - randomIntFromInterval(500, 1000) / 100_0000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          plantationId: plantation.id,
          lat: center.lat + randomIntFromInterval(500, 1000) / 100_0000,
          lng: center.lng - randomIntFromInterval(500, 1000) / 100_0000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          plantationId: plantation.id,
          lat: center.lat - randomIntFromInterval(500, 1000) / 100_0000,
          lng: center.lng + randomIntFromInterval(500, 1000) / 100_0000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
    });

    await queryInterface.bulkInsert(
      'plantationAreaPoint',
      organizations.flat(),
    );
  },

  down: async (queryInterface: any) => {
    await queryInterface.bulkDelete('plantationAreaPoint', null, {});
  },
};
