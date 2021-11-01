const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Order = sequelize.define('orders', {
  // Model attributes are defined here
  restaraunt_id: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  customer_id: {
    type: DataTypes.NUMBER
    // allowNull defaults to true
  },
  order_date:{
    type: DataTypes.DATE
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(Order === sequelize.models.Order);
export default Order;