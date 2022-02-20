import { Sequelize } from 'sequelize-typescript';
import * as Models from './models';

const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.js')[env];

export const sequelize = new Sequelize({
  ...config,
  models: Object.values(Models),
});
