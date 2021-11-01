var express = require('express');
var router = express.Router();
// const Order = require('../models').Order;
var mysql = require('mysql');
var connection = mysql.createConnection({
  password: 'password',
  user: 'root', 
  host: 'localhost',
  database: 'restaraunt'
});
connection.connect(function(err) {
    if (err) {
      console.log('erroer')
      console.error('error connecting: ' + err.stack);
      return 1;
    }
  
    console.log('connected as id ' + connection.threadId);
  });
const orders = []
function setValue(value) {
    orders = value;
  }
/* GET orders listing. */
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM restaraunt.orders', (err, result, fields)=>{
        if (err) throw err;
        res.send(result)
    })
});

// router.get

module.exports = router;
