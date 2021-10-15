var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 8888;
const users = [
   {id: 1, username: "clarkKent", password: "superman"},
   {id: 2, username: "bruceWayne", password: "batman"}
];

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

var mysql = require('mysql');

console.log('Get connection ...');

var conn = mysql.createConnection({
   database: 'senior_project',
   host: "localhost",
   user: "root",
   password: "12345"
});

conn.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
});

app.get('/time', (req, res) => {
   const time = (new Date()).toLocaleTimeString();
   res.status(200).send(`The Time is ${time}`);
});



app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}.`);
});

app.get("/login", (req, res) => {
   if (!req.body.username || !req.body.password) {
      res.status(400).send("Error. Please enter the correct username and password");
      return;
   }
   var ok = false;
   if (conn.state === "authenticated") {
      conn.query("SELECT * from `users` WHERE `username`='" + req.body.username + "' AND `password`=SHA('" + req.body.password + "');", function (err, result, fields) {
         console.log(result);
         if (err) {
            throw err;
         } else {
            if (result.length > 0)
               res.status(200).send("Successfully logged in!");
            else
               res.status(401).send("Error. Please enter the correct username and password");
         }
      });
   }
});

app.post("/register", (req, res) => {
   if (!req.body.username || !req.body.password) {
      res.status(400).send("Error. Please enter valid username and password");
      return;
   }
   var ok = false;
   if (conn.state === "authenticated") {
      conn.query("INSERT INTO `users` (`id`, `username`,`password`) VALUES (" + req.body.id + ", '" + req.body.username + "', SHA('" + req.body.password + "'))", function (err, result, fields) {
         console.log(result);
         if (err) {
            throw err;
         } else {
            res.status(200).send("Successfully registered!");
         }
      });
   }
});



app.get("*", (req, res) => {
   res.sendStatus(404);
});

module.exports = app;
