
const models = require('../models/index.js');
const {Sequelize, DataTypes} = require("sequelize");
const User = require('../models/db/user.js')(models.sequelize, DataTypes);
const Op = models.Sequelize.Op;

module.exports = {

    async update(req, res) {
        let user;
        await User.findOne({
            where: {
                id: req.body.id
            }
        }).then(_user => user = _user);

        user.set({
            username: req.body.username,
            password: req.body.password
        });
        user.save();
        res.status(200).send();
    },

    list(req, res) {
        return User.findAll({
            attributes: {exclude: ['password']},
            order: [['id','ASC']]})
            .then(users => res.status(200).send(users));
    },

    search(req, res) {
        return User.findAll({
            where: {
                username: req.body.username,
                password: req.body.password
            }})
            .then(users => (users.length == 0 ? res.status(400).send() : res.status(200).send(users)));
    },

    add(req, res) {
        return User
            .create({
                username: req.body.username,
                password: req.body.password
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },
};