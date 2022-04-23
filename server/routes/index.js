const restaurantController = require('../controllers').restaurant;
const userController = require('../controllers').user;
const reservationController = require('../controllers').reservation;
const cuisineController = require('../controllers').cuisine;
const authController = require("../controllers").auth;
const tableController = require('../controllers').table;
const auth = require('../middleware/auth');

module.exports = (app) => {
  app.get('/api', auth, (req, res) => res.status(200).send({
    message: 'Welcome to the API!',
  }));

  app.post('/api/user/add', userController.add);
  app.post('/api/user/delete', userController.delete);
  app.post('/api/user/update', userController.update);
  app.post('/api/user/find', userController.find);
  app.get('/api/user/list', userController.list);


  app.post('/api/restaurant/add', restaurantController.add);
  app.post('/api/restaurant/delete', restaurantController.delete);
  app.post('/api/restaurant/update', restaurantController.update);
  app.post('/api/restaurant/find', restaurantController.find);
  app.post('/api/restaurant/findExtended', auth, restaurantController.findExtended);
  app.get('/api/restaurant/list', restaurantController.list);
  app.get('/api/restaurant/listExtended', auth, restaurantController.listExtended);


  app.post('/api/reservation/add', auth, reservationController.add);
  app.post('/api/reservation/delete', auth, reservationController.delete);
  app.post('/api/reservation/update', auth, reservationController.update);
  app.post('/api/reservation/find', auth, reservationController.find);
  app.get('/api/reservation/list', reservationController.list);

  app.post('/api/cuisine/add', cuisineController.add);
  app.post('/api/cuisine/delete', cuisineController.delete);
  app.post('/api/cuisine/update', cuisineController.update);
  app.post('/api/cuisine/find', cuisineController.find);
  app.get('/api/cuisine/list', cuisineController.list);

  app.post('/api/table/add', tableController.add);
  app.post('/api/table/delete', tableController.delete);
  app.post('/api/table/update', tableController.update);
  app.post('/api/table/find', tableController.find);
  app.get('/api/table/list', tableController.list);

  app.post("/register", authController.register);
  app.post("/login", authController.login);
  app.put("/logout", authController.logout);

};
