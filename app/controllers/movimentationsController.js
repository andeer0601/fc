const express = require("express");

const app = express();

app.all("/", (_, res) => {
  res.status(200).json({ alive: "True", route: "/api/movimentations" });
});

module.exports = app;