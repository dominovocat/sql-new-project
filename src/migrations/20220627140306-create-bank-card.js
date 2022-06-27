'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ban_cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cardNumber: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false,
      },
      userId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:true,

        references:{
          model:'users',
          key:'id',
        }
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
    await queryInterface.dropTable('BankCards');
  }
};