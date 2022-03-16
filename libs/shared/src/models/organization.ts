import {
  Table,
  Column,
  Model,
  AllowNull,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import Sequelize from 'sequelize';

import { User } from '.';

@Table({
  tableName: 'organization',
  timestamps: true,
  createdAt: true,
  updatedAt: true,
})
export class Organization extends Model {
  @PrimaryKey
  @Column
  id: number;

  @ForeignKey(() => User)
  @Column
  ownerId: number;

  @Column
  name: string;

  @AllowNull
  @Column
  description?: string;

  @BelongsTo(() => User)
  owner: User;
}

export type TOrganizationModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): Organization;
};
