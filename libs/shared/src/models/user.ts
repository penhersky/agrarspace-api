import Sequelize from 'sequelize';

import { sequelize } from '../db';
import { beforeCreateUpdate } from '../hooks/user';

export class TUser extends Sequelize.Model {
  public id: number;

  public name: string;

  public email: string;

  public phoneNumber?: string;

  public password?: string;

  public provider: string;
}

export type TUserModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): TUser;
};

export const User = <TUserModel>sequelize.define(
  'user',
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
    email: {
      type: new Sequelize.DataTypes.STRING(48),
      allowNull: false,
      unique: true,
    },
    phoneNumber: {
      type: new Sequelize.DataTypes.STRING(24),
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
