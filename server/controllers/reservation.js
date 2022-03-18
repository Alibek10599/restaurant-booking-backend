
const models = require('../models/index.js');
const {Sequelize, DataTypes} = require("sequelize");
const Reservation = require('../models/reservation.js')(models.sequelize, DataTypes);
const Op = models.Sequelize.Op;

module.exports = {

    delete(req, res) {
        let reservation;
        Reservation.findOne({
            where: {
                id: req.body.id
            }
        }).then(_reservation => reservation = _reservation);

        reservation.destroy();
        res.status(200).send();
    },

    search(req, res) {
        return Reservation
            .findAll()
            .then(reservations => res.status(200).send(reservations))
            .catch(error => res.status(400).send(error));
    },

    add(req, res) {
        return Reservation
            .create({
                date: req.body.date,
                table: req.body.table,
                status: req.body.status,
                userId: req.body.userId,
                restaurantId: req.body.restaurantId
            })
            .then(reservation => res.status(201).send(reservation))
            .catch(error => res.status(400).send(error));
    },
};