var express = require('express');
var router = express.Router();
// const Order = require('../models').Order;

const orders = []
function setValue(value) {
    orders = value;
  }
/* GET orders listing. */
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM bbo-db', (err, result, fields)=>{
        if (err) throw err;
        res.send(result)
    })
});

router.get('/:id', (req, res)=>{
    connection.query('SELECT * FROM Restaurant.orders WHERE order_id = ?', [req.params.id], (err, result, fields)=>{
        if (err) throw err;
        res.send(result)
      })
    })

router.post('/', (req, res)=>{
  

    connection.query('INSERT INTO Restaurant.orders SET ?', req.body, (err, result, fields)=>{
        if (err) throw err;
        res.send(result)
      })
    }
)

module.exports = router;
