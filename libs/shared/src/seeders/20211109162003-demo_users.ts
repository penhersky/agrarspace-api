import { getRandom } from './../utils/seed';
import faker from 'faker';
import path from 'path';
import encrypt from '../utils/encrypt';
import { fillArr } from '../utils/seed';
import { UserRoles } from '../utils/constants';
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
          phoneNumber: faker.phone.phoneNumber('380#######'),
          password: passwordHash,
          provider: 'email',
          role: getRandom(Object.values(UserRoles)),
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
