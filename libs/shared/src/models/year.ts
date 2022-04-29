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

import { Culture, Organization, Plantation } from '.';

@Table({
  tableName: 'year',
  timestamps: true,
  createdAt: true,
  updatedAt: true,
})
export class Year extends Model {
  @PrimaryKey
  @Column
  id: number;

  @ForeignKey(() => Organization)
  @Column
  organizationId: number;

  @ForeignKey(() => Plantation)
  @Column
  plantationId: number;

  @ForeignKey(() => Culture)
  @Column
  cultureId: number;

  @AllowNull
  @Column
  plantedArea?: number;

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

  @BelongsTo(() => Plantation)
  plantation: Plantation;
}

export type TYearModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): Year;
};
