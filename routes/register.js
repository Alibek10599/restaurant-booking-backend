var express = require('express');
var router = express.Router();


router.get('/register', function(req, res, next) {
   if (!req.body.username || !req.body.password) {
      res.status(400).send("Error. Please enter valid username and password");
      return;
   }
   var ok = false;
   if (conn.state === "authenticated") {/*
      conn.query("INSERT INTO `users` (`id`, `username`,`password`) VALUES (" + req.body.id + ", '" + req.body.username + "', SHA('" + req.body.password + "'))", function (err, result, fields) {
         console.log(result);
         if (err) {
            throw err;
         } else {
            res.status(200).send("Successfully registered!");
         }
      });*/
      res.status(200).send("Database is absent for now")
   }
});

module.exports = router;
