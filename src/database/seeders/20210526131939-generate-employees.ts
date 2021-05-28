'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { v4: uuidv4 } = require('uuid');

    return queryInterface.bulkInsert('employees', [
      {
        id: uuidv4(),
        name: 'Carlos Silva',
        email: 'carlos@silva.com.br',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        name: 'Vitória Moraes',
        email: 'vitoria@moraes.com.br',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        name: 'Marcos Alves',
        email: 'marcos@alves.com.br',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        name: 'Bruna Guimarães',
        email: 'bruna@guimaraes.com.br',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('employees', null, {});
  }
};
