'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('employees', [
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

    const employees = await queryInterface.sequelize.query(
      `SELECT id FROM employees;`
    );

    return queryInterface.bulkInsert('markers', [
      {
        id: uuidv4(),
        employee_id: employees[0][0].id,
        time_from: '08:00',
        time_to: '17:00',
        date: '2021-05-27',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        employee_id: employees[0][1].id,
        time_from: '08:00',
        time_to: '17:00',
        date: '2021-05-27',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        employee_id: employees[0][2].id,
        time_from: '08:00',
        time_to: '17:00',
        date: '2021-05-27',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        employee_id: employees[0][3].id,
        time_from: '08:00',
        time_to: '17:00',
        date: '2021-05-27',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('employees', null, {});
    return queryInterface.bulkDelete('markers', null, {});
  }
};
