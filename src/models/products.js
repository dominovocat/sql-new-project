"use strict";
const { Model } = require("sequelize");
// const {ProductsToOrders}=require('.');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate({Category,Order,User,ProductsToOrders,UsersToProducts}) {
      // define association here
      Products.belongsTo(Category, {
        targetKey: "name",
        foreignKey: "categories",
      });
      Products.belongsToMany(Order, {
        through: ProductsToOrders,
        foreignKey: "product_id",
      });
      Products.hasMany(User,{
        through:UsersToProducts,
        foreignKey:"product_id",
      });
    }
  }
  Products.init(
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
      modelName: "Products",
      tableName:"products"
    }
  );
  return Products;
};
