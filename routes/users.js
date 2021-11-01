var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.status(200).send('respond with a user resource');
});

module.exports = router;
