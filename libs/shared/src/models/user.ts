import Sequelize from 'sequelize';

import { sequelize } from '..';
import { beforeCreateUpdate } from '../hooks/user';

export class User extends Sequelize.Model {
  public id: number;

  public name: string;

  public email: string;

  public phonNumber?: string;

  public password?: string;

  public provider: string;
}

type UserType = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): User;
};

const UserModel = <UserType>sequelize.define(
  'user',
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
    email: {
      type: new Sequelize.DataTypes.STRING(48),
      allowNull: false,
      unique: true,
    },
    phonNumber: {
      type: new Sequelize.DataTypes.STRING(18),
      allowNull: true,
    },
    password: {
      type: new Sequelize.DataTypes.STRING(164),
      allowNull: true,
    },
    provider: {
      type: new Sequelize.DataTypes.STRING(64),
      allowNull: false,
      defaultValue: 'email',
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    hooks: {
      beforeCreate: beforeCreateUpdate,
      beforeUpdate: beforeCreateUpdate,
    },
  },
);

export default UserModel;
