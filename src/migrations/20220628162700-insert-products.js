"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 1,
          name: "Coffee",
          brand: "Black Card",
          price: 20.3,
          amount: 20,
          categories: "Food and drink",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: 2,
          name: "Coffee",
          brand: "White Card",
          price: 20.3,
          amount: 20,
          categories: "junk",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", { id: [1, 2] }, {});
  },
};
