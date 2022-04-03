import faker from 'faker';
import { QueryInterface } from 'sequelize';

import { fillArr, getRandom, randomIntFromInterval } from '../utils/seed';
import { EmployeeRoles } from './../utils/constants';
import encrypt from '../utils/encrypt';

const pass = process.env.TEXT_PASS || '12345@A';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const organizations: any[] = await queryInterface.sequelize.query(
      `SELECT id FROM "organization";`,
    );
    const ids = organizations[0];

    const passwordHash = await encrypt.hash(pass);

    const employee = ids.map((organization: { id: number }) =>
      fillArr(randomIntFromInterval(3, 20), () => {
        const date = new Date();

        return {
          organizationId: organization.id,
          name: `${faker.name.firstName()} ${faker.name
            .lastName()
            .substring(0, 1)}`,
          position: faker.name.jobTitle(),
          password: passwordHash,
          role: getRandom(Object.values(EmployeeRoles)),
          expiresIn: new Date(
            date.setMonth(date.getMonth() + randomIntFromInterval(-2, 24)),
          ),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      }),
    ) as Array<any>;

    await queryInterface.bulkInsert('employee', employee.flat());
  },

  down: async (queryInterface: any) => {
    await queryInterface.bulkDelete('employee', null, {});
  },
};
