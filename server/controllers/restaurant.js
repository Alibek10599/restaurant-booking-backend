
const models = require('../models/index.js');
const {Sequelize, DataTypes} = require("sequelize");
const jwt = require("jsonwebtoken");
const Restaurant = require('../models/db/restaurant.js')(models.sequelize, DataTypes);
const Table = require('../models/db/table.js')(models.sequelize, DataTypes);
const Reservation = require('../models/db/reservation.js')(models.sequelize, DataTypes);
const User = require('../models/db/user.js')(models.sequelize, DataTypes);
const Op = models.Sequelize.Op;

module.exports = {
    async list(req, res) {

        let restaurants;
        await Restaurant
            .findAll()
            .then(_restaurants => restaurants = _restaurants)
            .catch(error => res.status(400).send(error));

        let responseList = [];
        for (const restaurant of restaurants) {
           let response = restaurant.get();
            await Table.findAll({where: {
                    restaraunt_id : restaurant.id
                }}).then(tables => response.allTables = tables.length);
            let date = new Date();
            await Reservation.findAll({where: {
                    restaurantId: restaurant.id,
                    date: date.toISOString().substring(0, 10)
                }}).then(reservations => response.freeTables = response.allTables - reservations.length)
            responseList.push(response);
        }

        return res.status(200).send(responseList);
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

    async find(req, res) {
        let restaurant;
        await Restaurant.findOne({
            where: req.body
        }).then(_restaurant => restaurant = _restaurant);

        response = restaurant.get();

        await Table.findAll({where: {
            restaraunt_id : restaurant.id
            }}).then(tables => response.allTables = tables.length);
        let date = new Date();
        await Reservation.findAll({where: {
                restaurantId: restaurant.id,
                date: date.toISOString().substring(0, 10)
            }}).then(reservations => response.freeTables = response.allTables - reservations.length)
        return res.status(200).send(response);
    },

    async findExtended(req, res) {
        let restaurant;
        await Restaurant.findOne({
            where: req.body
        }).then(_restaurant => restaurant = _restaurant);

        response = restaurant.get();


        //Add tables
        await Table.findAll({where: {
                restaraunt_id : restaurant.id
            }}).then(tables => {
                response.allTables = tables.length;
                response.tables = [];
                for (const table of tables) {
                    response.tables.push(table.get());
                }
            });

        let date = new Date();
        for (const table of response.tables) {
            await Reservation.findOne({where: {
                    restaurantId: restaurant.id,
                    table_id: table.id,
                    date: date.toISOString().substring(0, 10)
                }}).then(async reservation => {

                if (reservation != null && reservation.length > 0) {
                    const token =
                        req.body.token || req.query.token || req.headers["x-access-token"];
                    const username = jwt.verify(token, process.env.TOKEN_KEY);
                    let user;
                    await User.findOne({
                        where: {
                            restaurantId: restaurant.id,
                            table_id: table.id,
                            date: date.toISOString().substring(0, 10)
                        }
                    }).then(_user => user = _user);
                    if (reservation.status == "pending")
                        table.status = "pending";
                    else if (reservation.status == "active") {
                        if (reservation.userId == user.id)
                            table.status = "yours";
                        else
                            table.status = "occupied";
                    } else
                        table.status = "free";
                }

            });
        }

        await Reservation.findAll({where: {
                restaurantId: restaurant.id,
                date: date.toISOString().substring(0, 10)
            }}).then(reservations => response.freeTables = response.allTables - reservations.length)



        return res.status(200).send(response);
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