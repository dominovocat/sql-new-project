'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {

    static associate(models) {
      // define association here
      Categories.belongsTo(models.categories);
    }
  }
  Categories.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,

      validate:{
        len:[3,32],
      }
    },
  }, {
    sequelize,
    modelName: 'Categories',
    tableName:'categories'
  });
  return Categories;
};