'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(32),
        allowNull:false,
      },
      brand: {
        type: Sequelize.STRING(32),
        allowNull:false,
      },
      categories: {
        type: Sequelize.STRING(32),
        allowNull:false,
      },
      price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull:false,
      },
      amount: {
        type: Sequelize.DECIMAL(10,2),
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};