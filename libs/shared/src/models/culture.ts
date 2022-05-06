import Sequelize from 'sequelize';
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
  AllowNull,
  PrimaryKey,
  AutoIncrement,
  Unique,
} from 'sequelize-typescript';

import { Category, Year } from '.';

@Table({
  tableName: 'culture',
  timestamps: true,
  createdAt: true,
  updatedAt: true,
})
export class Culture extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Unique
  @Column
  name: string;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @ForeignKey(() => Culture)
  @Column
  parentId: number;

  @AllowNull
  @Column
  image?: string;

  @AllowNull
  @Column
  description?: string;

  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => Year)
  years: Year[];
}

export type TCultureModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): Culture;
};
