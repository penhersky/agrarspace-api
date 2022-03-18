import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  AllowNull,
  PrimaryKey,
} from 'sequelize-typescript';
import Sequelize from 'sequelize';

import { Culture } from '.';
import { Organization } from './organization';

@Table({
  tableName: 'yield',
  timestamps: true,
  createdAt: true,
  updatedAt: true,
})
export class Yield extends Model {
  @PrimaryKey
  @Column
  id: number;

  @ForeignKey(() => Organization)
  @Column
  organizationId: number;

  @ForeignKey(() => Culture)
  @Column
  cultureId: number;

  @AllowNull
  @Column
  plantedWeight?: number;

  @Column
  collectedWeight: number;

  @Column
  dateOfSowingStart: Date;

  @Column
  dateOfSowingEnd: Date;

  @Column
  dateOfCollectionStart: Date;

  @Column
  dateOfCollectionEnd?: Date;

  @AllowNull
  @Column
  description?: string;

  @BelongsTo(() => Culture)
  culture: Culture;

  @BelongsTo(() => Organization)
  organization: Organization;
}

export type TYieldModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): Yield;
};
