'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { v4: uuidv4 } = require('uuid');

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
    return queryInterface.bulkDelete('markers', null, {});
  }
};
