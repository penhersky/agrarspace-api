import path from 'path';
require('dotenv').config({ path: path.resolve(__dirname, '../../../../.env') });

export default {
  config: path.resolve('libs/shared/dist/config', 'config.js'),
  'models-path': path.resolve('libs/shared/dist', 'models'),
  'seeders-path': path.resolve(
    process.env.NODE_ENV === 'development'
      ? 'libs/shared/src'
      : 'libs/shared/dist',
    'seeders',
  ),
  'migrations-path': path.resolve(
    process.env.NODE_ENV === 'development'
      ? 'libs/shared/src'
      : 'libs/shared/dist',
    'migrations',
  ),
};
