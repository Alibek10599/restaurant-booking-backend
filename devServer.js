const app = require("./app");
const port = process.env.PORT || 3000;
const db = require("./database-check");

const routes = require("./routes/router");
// const api = require("./server/routes");
app.use("/", routes);
// app.use("/sql", api);
app.get("/", async function (req, res) {
   res.send(`Reached home!`);
});
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));
app.listen( port ,function () {
   console.log("Server started. Go to http://localhost:" + port);
});