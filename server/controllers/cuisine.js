
const models = require('../models/index.js');
const {Sequelize, DataTypes} = require("sequelize");
const Cuisine = require('../models/db/cuisine.js')(models.sequelize, DataTypes);
const Op = models.Sequelize.Op;

module.exports = {
    list(req, res) {
        return Cuisine
            .findAll()
            .then(cuisines => res.status(200).send(cuisines))
            .catch(error => res.status(400).send(error));
    },

    add(req, res) {
        return Cuisine
            .create({
                name: req.body.name
            })
            .then(cuisine => res.status(201).send(cuisine))
            .catch(error => res.status(400).send(error));
    },
};