'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [{
      name: '<nome>',
      email: '<email>',
      admin: true,
      password: '<senha criptografada>',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
