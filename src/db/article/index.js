const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const article = sequelize.define('article', {
  title: DataTypes.STRING(30),
  content: DataTypes.TEXT,
  intro: DataTypes.STRING(150),
});

module.exports = article;
