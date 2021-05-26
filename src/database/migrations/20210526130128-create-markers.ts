'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('markers', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      employee_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'employees', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      time_from: {
        type: Sequelize.TIME,
        allowNull: false
      },
      time_to: {
        type: Sequelize.TIME,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('markers');
  }
};
