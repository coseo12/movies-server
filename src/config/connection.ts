import { Sequelize } from 'sequelize';
import { conn } from './auth';

const env = process.env.NODE_ENV || 'development';
let config = null;
if (env === 'development') config = conn.development;
else if (env === 'test') config = conn.test;
else config = conn.production;

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT-9',
    },
    define: {
      timestamps: false,
    },
    timezone: '+09:00',
    pool: {
      max: 30,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);
