'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reservations', [
      {
        name: 'John Cena',
        slot: new Date('21 Feb 2020 17:00:00 GMT-0500'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Not John Cena',
        slot: new Date('21 Feb 2020 18:30:00 GMT-0500'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reservations', null, {});
  }
};
