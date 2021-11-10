import faker from 'faker';
import path from 'path';
import encrypt from '../encrypt';
import { fillArr } from '../utils/seed';
require('dotenv').config({ path: path.resolve(__dirname, '../../../../.env') });

const pass = process.env.TEXT_PASS || '12345@A';

module.exports = {
  up: async (queryInterface: any) => {
    const passwordHash = await encrypt.hash(pass);
    await queryInterface.bulkInsert(
      'user',
      fillArr(10, () => {
        return {
          name: faker.name.findName(),
          email: faker.internet.email(),
          phonNumber: faker.phone.phoneNumber('380#######'),
          password: passwordHash,
          provider: 'email',
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      }),
    );
  },

  down: async (queryInterface: any) => {
    await queryInterface.bulkDelete('user', null, {});
  },
};
