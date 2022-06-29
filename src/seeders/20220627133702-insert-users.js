"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        id:1,
        firstname: "John",
        lastname: "Doe",
        ismale: true,
        email: "adres@gmail.com",
        dob: "2000-01-01",
        password: "test1212",
        createdAt:new Date().toISOString(),
        updatedAt:new Date().toISOString(),
      },
      {
        id:2,
        firstname: "Jo",
        lastname: "Doe",
        ismale: true,
        email: "adresna@gmail.com",
        dob: "2001-01-01",
        password: "test11212",
        createdAt:new Date().toISOString(),
        updatedAt:new Date().toISOString(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users",{id:[1,2]},{})
  },
};
