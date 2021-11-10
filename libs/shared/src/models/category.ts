import Sequelize from 'sequelize';

import { sequelize } from '..';
import CultureModel from './culture';

export class Category extends Sequelize.Model {
  public id: number;

  public name: string;

  public image?: string;

  public color?: string;

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
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: new Sequelize.DataTypes.STRING(64),
      allowNull: false,
    },
    image: {
      type: new Sequelize.DataTypes.STRING(256),
      allowNull: true,
    },
    color: {
      type: new Sequelize.DataTypes.STRING(24),
      allowNull: true,
    },
    icon: {
      type: new Sequelize.DataTypes.STRING(64),
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

CultureModel.belongsTo(CategoryModel, { targetKey: 'id' });

CategoryModel.hasMany(CultureModel, {
  sourceKey: 'id',
  foreignKey: 'categoryId',
  as: 'category',
});

export default CategoryModel;
