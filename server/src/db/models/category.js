'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      // define association here
      Category.hasMany(models.Products,{
        foreignKey:'categories'
      });
    }
  }
  Category.init({
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
    modelName: 'Category',
    tableName:'categories'
  });
  return Category;
};