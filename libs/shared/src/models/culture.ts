import Sequelize from 'sequelize';

import { sequelize } from '../db';

export class TCulture extends Sequelize.Model {
  public id: number;

  public name: string;

  public categoryId: number;

  public parentId: number;

  public image?: string;

  public description?: string;
}

export type TCultureModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): TCulture;
};

export const Culture = <TCultureModel>sequelize.define(
  'culture',
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: new Sequelize.DataTypes.STRING(64),
      allowNull: false,
    },
    categoryId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    parentId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    image: {
      type: new Sequelize.DataTypes.STRING(132),
      allowNull: true,
    },
    description: {
      type: new Sequelize.DataTypes.TEXT(),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  },
);
