
const models = require('../models/index.js');
const {Sequelize, DataTypes} = require("sequelize");
const Restaurant = require('../models/db/restaurant.js')(models.sequelize, DataTypes);
const Op = models.Sequelize.Op;

module.exports = {
    list(req, res) {
        return Restaurant
            .findAll()
            .then(restaurants => res.status(200).send(restaurants))
            .catch(error => res.status(400).send(error));
    },

    add(req, res) {
        return Restaurant
            .create(req.body)
            .then(restaurant => res.status(201).send(restaurant))
            .catch(error => res.status(400).send(error));
    },

    delete (req, res) {
        return Restaurant
            .findOne({
                where: req.body
            }).then(restaurant => {
                if (!restaurant) {
                    return res.status(404).send({
                        message: 'Restaurant Not Found',
                    });
                }
                return restaurant
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    find(req, res) {
        return Restaurant.findOne({
            where: req.body
        }).then(_restaurant => res.send(_restaurant));
    },

    async update(req, res) {
        let restaurant;
        await Restaurant.findOne({
            where: {
                id: req.body.id
            }
        }).then(_restaurant => restaurant = _restaurant);

        restaurant.set(req.body.change);
        restaurant.save().then(res.status(200).send());
    }
};