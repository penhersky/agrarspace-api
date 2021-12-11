import Sequelize from 'sequelize';

import { sequelize } from '../db';

export class TYield extends Sequelize.Model {
  public id: number;

  public cultureId: number;

  public userId: number;

  public area: number;

  public plantedWeight: number;

  public collectedWeight: number;

  public dateOfSowingStart: Date;

  public dateOfSowingEnd?: Date;

  public dateOfCollectionStart: Date;

  public dateOfCollectionEnd?: Date;

  public description?: string;
}

export type TYieldModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): TYield;
};

export const Yield = <TYieldModel>sequelize.define(
  'yield',
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    cultureId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    area: {
      type: new Sequelize.DataTypes.DOUBLE(),
      allowNull: false,
    },
    plantedWeight: {
      type: new Sequelize.DataTypes.DOUBLE(),
      allowNull: true,
    },
    collectedWeight: {
      type: new Sequelize.DataTypes.DOUBLE(),
      allowNull: false,
    },
    dateOfSowingStart: {
      type: new Sequelize.DataTypes.DATE(),
      allowNull: false,
    },
    dateOfSowingEnd: {
      type: new Sequelize.DataTypes.DATE(),
      allowNull: false,
    },
    dateOfCollectionStart: {
      type: new Sequelize.DataTypes.DATE(),
      allowNull: false,
    },
    dateOfCollectionEnd: {
      type: new Sequelize.DataTypes.DATE(),
      allowNull: false,
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
