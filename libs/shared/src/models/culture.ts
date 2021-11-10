import Sequelize from 'sequelize';

import { sequelize } from '..';

export class Culture extends Sequelize.Model {
  public id: number;

  public name: string;

  public categoryId: number;

  public image?: string;

  public description?: string;
}

type CultureType = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): Culture;
};

const CultureModel = <CultureType>sequelize.define(
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
    deletedAt: true,
  },
);

export default CultureModel;
