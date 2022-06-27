'use strict';



module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(32),
        allowNull:false,
        unique:true,
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

    await queryInterface.addConstraint('products',{
      type:'FOREIGN KEY',
      filds:['category'],
      references:{
        field:'name',
        table:'categories',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('products','products_category_fkey');
    await queryInterface.dropTable('categories');
  }
};