import { Sequelize } from 'sequelize-typescript';
import * as path from 'path';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@src/config';
import { logger } from '@src/utils/logger';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  database: DB_DATABASE,
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: parseInt(DB_PORT),
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    min: 0,
    max: 5,
  },
  logQueryParameters: NODE_ENV === 'development',
  logging: (query, time) => {
    logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
  models: [path.join(__dirname, '../models')],
});
export const DB = {
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};
