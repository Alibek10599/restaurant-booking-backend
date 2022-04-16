'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reservation.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'LAZY',
      });

      Reservation.belongsTo(models.Restaurant, {
        foreignKey: 'RestaurantId',
        onDelete: 'LAZY',
      });
      Reservation.belongsTo(models.Table, {
        foreignKey: 'table_id',
        onDelete: 'LAZY',
      });
    }
  }
  Reservation.init({
    date: DataTypes.STRING,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reservation',
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
  return Reservation;
};