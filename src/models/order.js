"use strict";
const { Model } = require("sequelize");
// const { ProductsToOrders } = require(".");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "order",
      });

      Order.belongsToMany(models.Products, {
        through: models.ProductsToOrders,
        foreignKey: "order_id",
      });
    }
  }
  Order.init(
    {
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      phones: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
      status: {
        type: DataTypes.ENUM(
          "prepared",
          "paid",
          "shipping",
          "shiped",
          "received"
        ),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "orders",
    }
  );
  return Order;
};
