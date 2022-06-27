'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {

    static associate(models) {
      // define association here
      products.belongsTo(models.Category,{
        targetKey:'name'
      })
    }
  }
  products.init({
    name: {
      type:DataTypes.STRING(32),
      allowNull:false,
    },
    brand: {
      type:DataTypes.STRING(32),
      allowNull:false,
    },
    categories: {
      type:DataTypes.STRING(32),
      allowNull:false,
    },
    price: {
      type:DataTypes.DECIMAL(10,2),
      allowNull:false,
    },
    amount: {
      type:DataTypes.DECIMAL(10,2),
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};