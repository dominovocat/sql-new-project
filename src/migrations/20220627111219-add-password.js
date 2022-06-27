'use strict';

const { query } = require("express");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users','password',{
      type:Sequelize.TEXT,
      allowNull:false,
      defaultValue:'',
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropColumn('users','password',);
  }
};
