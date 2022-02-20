import {
  Table,
  Column,
  Model,
  HasMany,
  AllowNull,
  PrimaryKey,
} from 'sequelize-typescript';
import Sequelize from 'sequelize';

import { Culture } from '.';

@Table({
  tableName: 'category',
  timestamps: true,
  createdAt: true,
  updatedAt: true,
})
export class Category extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @AllowNull
  @Column
  color?: string;

  @AllowNull
  @Column
  icon?: string;

  @AllowNull
  @Column
  image?: string;

  @AllowNull
  @Column
  description?: string;

  @HasMany(() => Culture)
  culture: Culture[];
}

export type TCategoryModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): Category;
};
