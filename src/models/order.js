'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {

    static associate(models) {
      // define association here
    }
  }
  Order.init({
    address: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    user_id:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    phones: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isNumeric:true,
      }
    },
    status: {
      type: Sequelize.ENUM('prepared','paid','shipping','shiped','received'),
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'Order',
    tableName:'orders',
  });
  return Order;
};