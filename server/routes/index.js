const restaurantController = require('../controllers').restaurant;
const userController = require('../controllers').user;
const reservationController = require('../controllers').reservation;
const cuisineController = require('../controllers').cuisine;
const authController = require("../controllers").auth;
const auth = require('../middleware/auth');

module.exports = (app) => {
  app.get('/api', auth, (req, res) => res.status(200).send({
    message: 'Welcome to the API!',
  }));

  app.post('/api/restaurant/add', auth, restaurantController.add);
  app.get('/api/restaurant/search', auth, restaurantController.search);
  app.get('/api/restaurant/delete/:id', auth, restaurantController.delete);


  app.post('/api/user/add', auth, userController.add);
  app.get('/api/user/list', auth, userController.list);
  app.post('/api/user/update', auth, userController.update);


  app.post('/api/reservation/add', auth, reservationController.add);
  app.post('/api/reservation/cancel', auth, reservationController.delete);
  
  app.get('/api/cuisine', auth, cuisineController.list);

  app.post("/register", authController.register);
  app.post("/login", authController.login);
  app.put("/logout", authController.logout);

};
