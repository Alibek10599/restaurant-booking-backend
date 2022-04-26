
const models = require('../models/index.js');
const {Sequelize, DataTypes} = require("sequelize");
const Reservation = require('../models/db/reservation.js')(models.sequelize, DataTypes);
const Op = models.Sequelize.Op;

module.exports = {

    list(req, res) {
        return Reservation
            .findAll()
            .then(reservations => res.status(200).send(reservations))
            .catch(error => res.status(400).send(error));
    },

    add(req, res) {
        return Reservation
            .create(req.body)
            .then(reservation => res.status(201).send(reservation))
            .catch(error => res.status(400).send(error));
    },

    delete (req, res) {
        return Reservation
            .findOne({
                where: req.body
            }).then(reservation => {
                if (!reservation) {
                    return res.status(404).send({
                        message: 'Reservation Not Found',
                    });
                }
                return reservation
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    find(req, res) {
        return Reservation.findAll({
            where: req.body
        }).then(_reservation => res.send(_reservation));
    },

    async update(req, res) {
        let reservation;
        await Reservation.findOne({
            where: {
                id: req.body.id
            }
        }).then(_reservation => reservation = _reservation);

        reservation.set(req.body.change);
        reservation.save().then(res.status(200).send());
    }
};