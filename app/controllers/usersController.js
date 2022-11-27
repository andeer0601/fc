const express = require("express");
const db = require("../../config/database");

const app = express();

app.get("/", async (req, res) => {

  let sql = "select * from users limit 1;"
	db.get(sql, [], (err, row) => {
			if (err) {
				res.status(400).json({
          Message: err.message
        })
			}
			res.json({
        data: row
      })
		});
});

app.post("/", async (req, res) => {

  let sql = "update users set name = COALESCE(?,name), nick = COALESCE(?,nick), email = COALESCE(?,email) where id = 1;"
  let params = [req.body.name, req.body.nick, req.body.email];
	db.run(sql, params, (err, result) => {
			if (err) {
				res.status(400).json({
          Message: err.message
        })
			}
			res.json({
        data: result,
        changes: this.changes
      })
		});
});

module.exports = app;