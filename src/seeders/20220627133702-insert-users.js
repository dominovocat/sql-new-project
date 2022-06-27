"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        id:1,
        firstname: "John",
        lastname: "Doe",
        isMale: true,
        email: "adres@gmail.com",
        dob: "2000-01-01",
        password: "test",
        createdAt:new Date().toISOString(),
        updateAT:new Date().toISOString(),
      },
      {
        id:2,
        firstname: "Jo",
        lastname: "Doe",
        isMale: true,
        email: "adresna@gmail.com",
        dob: "2000-01-01",
        password: "test1",
        createdAt:new Date.toISOString(),
        updateAT:new Date.toISOString(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users",{id:[1,2]},{})
  },
};
