import { Sequelize } from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

export * from './user';
export { Sequelize } from 'sequelize';
