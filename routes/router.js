const routes = require("express").Router();
const user = require("./users");
const restaraunts = require('./restaraunt')
routes.get("/", async function (req, res) {
   res.send(`Reached home!`);
});
routes.use("/", user);
routes.use('/', restaraunts)
module.exports = routes;