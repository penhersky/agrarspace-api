import {
  Table,
  Column,
  Model,
  AllowNull,
  PrimaryKey,
} from 'sequelize-typescript';
import Sequelize from 'sequelize';

import { beforeCreateUpdate } from '../hooks/user';
import { UserRoles } from '../utils/constants';

@Table({
  tableName: 'user',
  timestamps: true,
  createdAt: true,
  updatedAt: true,
  hooks: {
    beforeCreate: beforeCreateUpdate,
    beforeUpdate: beforeCreateUpdate,
  },
})
export class User extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @AllowNull
  @Column
  phoneNumber?: string;

  @AllowNull
  @Column
  password: string;

  @Column
  role: UserRoles;

  @Column
  provider: string;
}

export type TUserModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): User;
};
