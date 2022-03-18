const restaurantController = require('../controllers').restaurant;
const userController = require('../controllers').user;
const reservationController = require('../controllers').reservation;
const cuisineController = require('../controllers').cuisine;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/restaurant/add', restaurantController.add);
  app.get('/api/restaurant/search', restaurantController.search);
  app.post('/api/user/add', userController.add);
  app.get('/api/user/list', userController.list);
  app.post('/api/user/update', userController.update);
  app.post('/api/reservation/add', reservationController.add);
  app.post('/api/reservation/cancel', reservationController.delete);
  app.get('/api/cuisine', cuisineController.list);

};
