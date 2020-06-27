const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const auth = sequelize.define('auth', { token: DataTypes.TEXT });

module.exports = auth;
