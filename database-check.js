var mysql = require('mysql');

console.log('Get connection ...');

var conn = mysql.createConnection({
   database: 'bbo-db',
   host: "bbo-db.cugn8zapjwmd.eu-west-1.rds.amazonaws.com:5000",
   user: "admin",
   password: "12345678"
});

conn.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
});

module.exports = conn;