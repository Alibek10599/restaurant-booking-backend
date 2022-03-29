
const models = require('../models/index.js');
const {Sequelize, DataTypes} = require("sequelize");
const Restaurant = require('../models/db/restaurant.js')(models.sequelize, DataTypes);
const Op = models.Sequelize.Op;

module.exports = {
    search(req, res) {
        return Restaurant
            .findAll()
            .then(restaurants => res.status(200).send(restaurants))
            .catch(error => res.status(400).send(error));
    },

    add(req, res) {
        console.log(Restaurant)
        return Restaurant
            .create({
                name: req.body.name,
                address: req.body.address,
                rating: req.body.rating,
                phone: req.body.phone,
                info: req.body.info
            })
            .then(restaurant => res.status(201).send(restaurant))
            .catch(error => res.status(400).send(error));
    },

    delete (req, res) {
        return Restaurant
            .findById(req.params.id)
            .then(restaurant => {
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
    }
};