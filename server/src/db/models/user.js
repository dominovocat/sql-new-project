"use strict";
const { Model } = require("sequelize");

/* 
  allowNull: false - NOT NULL,
  unique: true - UNIQUE
  defaultValue: 'value' - DEFAULT 'value'
*/

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Order, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "orders",
      });
      User.hasOne(models.BankCard, { foreignKey: "userId", as: "bankCard" });
      User.belongsToMany(models.Products, {
        through: 'UsersToProducts',
        foreignKey: "user_id",
      });
    }
  }
  User.init(
    {
      firstname: {
        type: DataTypes.STRING(32),
        allowNull: false,
        validate: {
          len: [3, 32],
        },
      },
      lastname: {
        type: DataTypes.STRING(32),
        allowNull: false,
        validate: {
          len: [3, 32],
        },
      },
      email: {
        type: DataTypes.STRING(32),
        allowNull: false,
        unique: true,
        validate: {
          len: [7, 32],
        },
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
          len: [7, 32],
        },
      },
      ismale: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isAfter: "1900-01-01",
          isBeforeCurrentDate(value) {
            const date = new Date(value);

            if (date > new Date()) {
              throw new Error("Cannot set dob after current date");
            }
          },
        },
      },
      height: {
        type: DataTypes.NUMERIC(3, 2),
        allowNull: false,
        defaultValue: 1.5,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
