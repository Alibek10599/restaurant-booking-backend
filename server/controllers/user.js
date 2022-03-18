
const models = require('../models/index.js');
const {Sequelize, DataTypes} = require("sequelize");
const User = require('../models/user.js')(models.sequelize, DataTypes);
const Op = models.Sequelize.Op;

module.exports = {

    signin(req, res) {
        return User.findAll({
            where: {
                username: req.body.username,
                password: req.body.password
            }})
            .then(users => (users.length == 0 ? res.status(400).send() : res.status(200).send(users)));
    },

    list(req, res) {
        return User
            .findAll()
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
    },

    create(req, res) {
        return User
            .create({
                username: req.body.username,
                password: req.body.password
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },
};