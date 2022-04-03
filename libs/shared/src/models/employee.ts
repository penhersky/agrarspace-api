import Sequelize from 'sequelize';
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
} from 'sequelize-typescript';

import { Organization } from '.';
import { beforeCreateUpdate } from '../hooks/user';
import { EmployeeRoles } from './../utils/constants';

@Table({
  tableName: 'employee',
  timestamps: true,
  createdAt: true,
  updatedAt: true,
  hooks: {
    beforeCreate: beforeCreateUpdate,
    beforeUpdate: beforeCreateUpdate,
  },
})
export class Employee extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column({ allowNull: true })
  position: string;

  @Column
  password: string;

  @Column({ allowNull: true })
  passExpiresIn: Date;

  @Column
  role: EmployeeRoles;

  @Column
  expiresIn: Date;

  @ForeignKey(() => Organization)
  @Column
  organizationId: number;

  @BelongsTo(() => Organization)
  organization: Organization;
}

export type TEmployeeModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): Employee;
};
