const Sequelize = require('sequelize');
const { sqlConfig } = require('../configs/db');

const sequelize = new Sequelize(
  sqlConfig.database,
  sqlConfig.user,
  sqlConfig.password,
  {
    host: sqlConfig.host,
    dialect: 'mysql',
    pool: { max: 10, min: 0, idle: 10000 },
  }
);

sequelize
  .authenticate()
  .then(() => {
    process.stdout.write('Database connection successful!\r\n');
  })
  .catch((err) => {
    process.stdout.write('Database connection failed!\r\n', err);
    process.exit(1);
  });

module.exports = sequelize;
