'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('employees', [
      {
        id: uuidv4(),
        name: 'Carlos Silva',
        email: 'carlos@silva.com.br'
      },
      {
        id: uuidv4(),
        name: 'Vitória Moraes',
        email: 'vitoria@moraes.com.br'
      },
      {
        id: uuidv4(),
        name: 'Marcos Alves',
        email: 'marcos@alves.com.br'
      },
      {
        id: uuidv4(),
        name: 'Bruna Guimarães',
        email: 'bruna@guimaraes.com.br'
      }
    ], {});

    const employees = await queryInterface.sequelize.query(
      `SELECT id FROM employees;`
    );

    await queryInterface.bulkInsert('markers', [

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
