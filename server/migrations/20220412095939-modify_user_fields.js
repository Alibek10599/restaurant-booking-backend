'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // await queryInterface.addColumn('Users', 'username', {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // });

    // await queryInterface.addColumn('Users', 'password', {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // });

    // await queryInterface.addColumn('Users', 'token', {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    // await queryInterface.removeColumn('Users', 'username');
    // await queryInterface.removeColumn('Users', 'password');
    // await queryInterface.removeColumn('Users', 'token');
  }
};
