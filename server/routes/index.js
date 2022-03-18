const todosController = require('../controllers').todos;
const restaurantController = require('../controllers').restaurant;
const userController = require('../controllers').user;


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/todos', todosController.create);
  app.get('/api/todos', todosController.list);
  app.post('/api/restaurant', restaurantController.create);
  app.get('/api/restaurant', restaurantController.list);
  app.post('/api/user', userController.create);
  app.get('/api/user', userController.list);


};
