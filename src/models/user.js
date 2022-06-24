"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstname: {
        type: DataTypes.STRING(32),
        allowNull: false,
        validate:{},
      },
      lastname: { 
        type: DataTypes.STRING(32), 
        allowNull: false,
        validate:{},
      },
      email: { 
        type: DataTypes.STRING(32), 
        allowNull: false,
        unique:true,
      },
      ismale: { 
        type: DataTypes.BOOLEAN, 
        allowNull: false,
      },
      dob: { 
        type: DataTypes.DATEONLY, 
        allowNull: false,
      },
      height: { 
        type: DataTypes.NUMERIC(3,2), 
        allowNull: false, 
        defaultValue:1.5,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
