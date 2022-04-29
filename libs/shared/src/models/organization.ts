import {
  Table,
  Column,
  Model,
  AllowNull,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import Sequelize from 'sequelize';

import { Year, User, Plantation } from '.';

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

  @Column
  confirmed: boolean;

  @AllowNull
  @Column
  description?: string;

  @BelongsTo(() => User)
  owner: User;

  @HasMany(() => Year)
  years: Year[];

  @HasMany(() => Plantation)
  plantations: Plantation[];
}

export type TOrganizationModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): Organization;
};
