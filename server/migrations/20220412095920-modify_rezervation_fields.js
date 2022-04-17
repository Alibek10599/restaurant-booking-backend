'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.addColumn('Reservations', 'table_id', {
    //   type: Sequelize.INTEGER,
    //   onDelete: 'SET NULL',
    //   references: {
    //     model: 'Tables',
    //     key: 'id',
    //     as: 'TableId'
    //   }
    // });
    // await queryInterface.addColumn('Reservations', 'date', {
    //   type: Sequelize.DATEONLY,
    //   allowNull: true,
    // });

    // await queryInterface.addColumn('Reservations', 'extra_info', {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    // });
    // await queryInterface.removeColumn('Reservations', 'table');
  
      

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Reservations', 'extra_info');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn('Reservations', 'table', {
      type: Sequelize.INTEGER,
      onDelete: 'SET NULL',
      references: {
        model: 'Tables',
        key: 'id',
        as: 'TableId'
      }
    });
  }
};
