import Sequelize from 'sequelize';

import { sequelize } from '..';

export class Category extends Sequelize.Model {
  public id: number;

  public name: string;

  public image?: string;

  public icon?: string;

  public description?: string;
}

type CategoryType = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): Category;
};

const CategoryModel = <CategoryType>sequelize.define(
  'category',
  {
    id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: new Sequelize.DataTypes.STRING(64),
      allowNull: false,
    },
    image: {
      type: new Sequelize.DataTypes.STRING(132),
      allowNull: true,
    },
    icon: {
      type: new Sequelize.DataTypes.STRING(64),
      allowNull: true,
    },
    description: {
      type: new Sequelize.DataTypes.STRING(64),
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

export default CategoryModel;
