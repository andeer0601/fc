const express = require("express");

const Users = require("./usersController");
const Movimentations = require("./movimentationsController");

const app = express();

app.all("/", (_, res) => {
  res.status(200).json({ alive: "True", route: "/api" });
});

app.use("/users", Users);
app.use("/movimentations", Movimentations);

module.exports = app;