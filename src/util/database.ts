import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('nodecomplete', 'root', '0000', {
  dialect: 'mysql',
  host: 'localhost'
});
