const sqlConfig = {
  host: process.env.DB_IP,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATA_BASE,
};

module.exports = { sqlConfig };
