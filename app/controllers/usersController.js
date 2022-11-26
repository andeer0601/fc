const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ alive: "True", route: "/api/users" });
});

module.exports = app;