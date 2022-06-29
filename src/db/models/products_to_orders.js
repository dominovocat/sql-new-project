"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductsToOrders extends Model {
    static associate(models) {
      // define association here
    }
  }
  ProductsToOrders.init(
    {
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ProductsToOrders",
      tableName:'products_to_orders',
    }
  );
  return ProductsToOrders;
};
