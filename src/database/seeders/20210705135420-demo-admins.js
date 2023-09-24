"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        name: "admin",
        email: "admin@moovebike.com",
        admin: true,
        password: "0d596e4f37eea37dae43457b", //123456
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
