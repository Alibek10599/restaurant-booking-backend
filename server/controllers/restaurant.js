
const models = require('../models/index.js');
const {Sequelize, DataTypes} = require("sequelize");
const Restaurant = require('../models/restaurant.js')(models.sequelize, DataTypes);
const Op = models.Sequelize.Op;

module.exports = {
    list(req, res) {
        return Restaurant
            .findAll()
            .then(todos => res.status(200).send(todos))
            .catch(error => res.status(400).send(error));
    },

    create(req, res) {
        return Restaurant
            .create({
                title: req.body.title,
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
};