const sequelize = require('../db');
require('../db/article');
require('../db/auth');

setTimeout(() => {
  sequelize.sync();
  process.exit(0);
});
