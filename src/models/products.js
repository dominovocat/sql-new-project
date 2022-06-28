"use strict";
const { Model } = require("sequelize");
// const {ProductsToOrders}=require('.');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate(models) {
      // define association here
      products.belongsTo(models.Category, {
        targetKey: "name",
        foreignKey: "categories",
      });
      products.belongsToMany(models.Order, {
        through: models.ProductsToOrders,
        foreignKey: "product_id",
      });
      products.belongsToMany(models.User,{
        through:models.UsersToProducts,
        foreignKey:"product_id",
      })
    }
  }
  products.init(
    {
      name: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      categories: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "products",
    }
  );
  return products;
};
