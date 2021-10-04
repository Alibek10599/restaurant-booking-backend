const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:')

const Restaraunt = sequelize.define('Restaraunt',{
    name:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    adress:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    height:{
        type:DataTypes.INTEGER,
        allowNull: true
    },
    width:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
})

module.exports = Restaraunt;