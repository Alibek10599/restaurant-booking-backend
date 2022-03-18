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
      'restaurantId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'Restaurants',
            key: 'id',
            as: 'RestaurantId',
          }
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
      'restaurantId' // key we want to remove
    );

  }
};
