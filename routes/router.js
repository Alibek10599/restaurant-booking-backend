const routes = require("express").Router();
const user = require("./users");
routes.get("/", async function (req, res) {
   res.send(`Reached home!`);
});
routes.use("/", user);
module.exports = routes;