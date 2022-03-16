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
}

export type TYieldModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): Yield;
};
