import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  HasMany,
  AutoIncrement,
} from 'sequelize-typescript';
import Sequelize from 'sequelize';

import { Organization, Year, PlantationAreaPoint } from '.';

@Table({
  tableName: 'plantation',
  timestamps: true,
  createdAt: true,
  updatedAt: true,
})
export class Plantation extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => Organization)
  @Column
  organizationId: number;

  @Column
  name: string;

  @Column({ allowNull: true })
  status: string;

  @Column
  areaSize: number;

  @Column
  region: string;

  @Column({ allowNull: true })
  description?: string;

  @BelongsTo(() => Organization)
  organization: Organization;

  @HasMany(() => Year)
  years: Year[];

  @HasMany(() => PlantationAreaPoint)
  areaPoints: PlantationAreaPoint[];
}

export type TPlantationModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): Plantation;
};
