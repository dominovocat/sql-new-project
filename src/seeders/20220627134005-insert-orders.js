'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          id:1,
          adress:"New York",
          phone:"412345678912",
          status:"prepared",
          user_id:1,
          createdAt:new Date().toISOString(),
          updateAT:new Date().toISOString(),
        },
        {
          id:2,
          adress:"California",
          phone:"412345645912",
          status:"prepared",
          user_id:1,
          createdAt:new Date.toISOString(),
          updateAT:new Date.toISOString(),
        },
      ]
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orders",{id:[1,2]},{})
  },
};
