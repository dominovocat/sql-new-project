'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('products',{
      type:'check',
      fields:['price'],
      where:{
        price:{
          [Sequelize.Op.gt]:1
        },
      }
    })
  },

  async down (queryInterface, Sequelize) {

  }
};
