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
} from 'sequelize-typescript';

import { Category, Yield } from '.';

@Table({
  tableName: 'culture',
  timestamps: true,
  createdAt: true,
  updatedAt: true,
})
export class Culture extends Model {
  @PrimaryKey
  @Column
  id: number;

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

  @Column
  description?: string;

  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => Yield)
  yields: Yield[];
}

export type TCultureModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): Culture;
};
