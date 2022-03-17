
const models = require('../models/index.js');
const {Sequelize, DataTypes} = require("sequelize");
const Todo = require('../models/todo.js')(models.sequelize, DataTypes);
const Op = models.Sequelize.Op;

module.exports = {
    list(req, res) {
        return Todo
          .findAll()
          .then(todos => res.status(200).send(todos))
          .catch(error => res.status(400).send(error));
      },
      
  create(req, res) {
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};
