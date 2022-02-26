require('dotenv').config();

module.exports = {
    "development": {
      "username": "admin",
      "password": '12345678',
      "database": "restaraunt",
      "host": "bbo-db.cugn8zapjwmd.eu-west-1.rds.amazonaws.com",
      "port": 5000,
      "dialect": "mysql"
    },
    "test": {
      "username": "admin",
      "password": '12345678',
      "database": "restaraunt",
      "host": "bbo-db.cugn8zapjwmd.eu-west-1.rds.amazonaws.com",
      "port": 5000,
      "dialect": "mysql"
    }
  // "development": {
  //   "use_env_variable": 'DATABASE_URL'
  // },
  // "test": {
  //   "username": process.env.MYSQL_DB_USER,
  //   "password": process.env.MYSQL_DB_PASSWORD,
  //   "database": process.env.MYSQL_DB,
  //   "host": "127.0.0.1",
  //   "port": 5000,
  //   "dialect": "mysql"
  // }
}

