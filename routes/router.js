const routes = require("express").Router();
const user = require("./users");
const orders = require ("./order")
const restaraunts = require('./restaraunt')
routes.get("/", async function (req, res) {
   res.send(`Reached home!`);
});
routes.use("/", user);
routes.use('/', restaraunts)
routes.use('/orders', orders)
module.exports = routes;