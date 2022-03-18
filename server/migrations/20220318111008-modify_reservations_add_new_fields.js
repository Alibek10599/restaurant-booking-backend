module.exports = {
  up:(queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * 
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     return queryInterface.addColumn(
      'Reservations', // name of Source model
      'userId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
      }
    );
  },

   down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.removeColumn(
      'Reservations', // name of Source model
      'userId' // key we want to remove
    );

  }
};
