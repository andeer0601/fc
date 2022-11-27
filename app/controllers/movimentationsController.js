const express = require("express");
const db = require("../../config/database");

const app = express();

app.get("/", async (req, res) => {

  let body = req.body;

  let sql = "select * from movimentations where 1=1";

  if(!!body.id && body.id > 0)
    sql = `${sql} and id = ${body.id}`;

	db.all(sql, [], (err, rows) => {
			if (err) {
				res.status(400).json({
          Message: err.message
        })
			}
			res.json({
        data: rows
      })
		});
});

app.post("/", async (req, res) => {

  let body = req.body;

  let sql = "";

  if(!!body.id && body.id > 0)
    sql = `update movimentations set type = ${body.type}, value = ${body.value}, recurrent = ${body.recurrent}, months = ${body.months} where id = ${body.id}`;
  else
    sql = `insert into movimentations(type, value, recurrent, months) select ${body.type}, ${body.value}, ${body.recurrent}, ${body.months}`;

	db.run(sql, [], (err, result) => {
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

app.delete("/", async (req, res) => {

  let body = req.body;

  let sql = `delete from movimentations where id = ${body.id}`;

	db.run(sql, [], (err, result) => {
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