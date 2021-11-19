var express = require('express');
var router = express.Router();


router.get('/login', function(req, res, next) {
   if (!req.body.username || !req.body.password) {
      res.status(400).send("Error. Please enter the correct username and password");
      return;
   }
   var ok = false;
   if (conn.state === "authenticated") {
      /*conn.query("SELECT * from `users` WHERE `username`='" + req.body.username + "' AND `password`=SHA('" + req.body.password + "');", function (err, result, fields) {
         console.log(result);
         if (err) {
            throw err;
         } else {
            if (result.length > 0)
               res.status(200).send("Successfully logged in!");
            else
               res.status(401).send("Error. Please enter the correct username and password");
         }
      });*/
      res.status(200).send("Successfully logged in!");
   }
});

module.exports = router;
