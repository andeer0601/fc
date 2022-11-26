const express = require("express");

const Controllers = require("./controllers/controllers");

const app = express();

app.use(express.json());

app.all("/", (_, res) => {
  res.status(200).json({ alive: "True", route: "/" });
});

app.use("/api", Controllers);

module.exports = app;