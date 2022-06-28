'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("UsersToProducts",{
      product_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'products',
          key:'id',
        }
      },
      user_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'users',
          key:'id',
        }
      }
    });
    await queryInterface.addConstraint('UsersToProducts',{
      type:'PRIMARY KEY',
      fields:['product_id','user_id']
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("UsersToProducts");
  }
};
