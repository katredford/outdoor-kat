const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pics extends Model { }

Pics.init(
  {
    url: DataTypes.STRING,
    caption: DataTypes.STRING,
  },
  {
    sequelize
  }
);

module.exports = Pics;