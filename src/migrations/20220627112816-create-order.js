'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      phones: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      status: {
        type: Sequelize.ENUM('prepared','paid','shipping','shiped','received'),
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
    await queryInterface.dropTable('Orders');
  }
};