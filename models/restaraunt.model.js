const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:')

const Restaraunt = sequelize.define('Restaraunt',{
    name:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    
})