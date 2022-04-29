import Sequelize from 'sequelize';
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  AllowNull,
  PrimaryKey,
} from 'sequelize-typescript';

import { Plantation } from '.';

@Table({
  tableName: 'plantationAreaPoint',
  timestamps: true,
  createdAt: true,
  updatedAt: true,
})
export class PlantationAreaPoint extends Model {
  @PrimaryKey
  @Column
  id: number;

  @ForeignKey(() => Plantation)
  @Column
  plantationId: number;

  @Column
  lat: number;

  @Column
  lng: number;

  @AllowNull
  @Column
  description?: string;

  @BelongsTo(() => Plantation)
  plantation: Plantation;
}

export type TPlantationAreaPointModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): PlantationAreaPoint;
};
