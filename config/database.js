var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            nick text, 
            email text UNIQUE,
            CONSTRAINT email_unique UNIQUE (email)
            )`,
        (err) => {
            if (err) {
                
            }else{
                console.log("Table Created");
                var insert = 'INSERT INTO users (name, nick, email) VALUES (?,?,?)'
                db.run(insert, ["Anderson", "Ander","anderson.henrique06@hotmail.com"])
            }
        });  
        db.run(`CREATE TABLE movimentations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type INTEGER, 
            value REAL, 
            recurrent INTEGER,
			months INTEGER
            )`,
        (err) => {
            if (err) {
                
            }else{
                console.log("Table Created");
                var insert = 'INSERT INTO movimentations (type, value, recurrent, months) VALUES (?,?,?,?)'
                db.run(insert, [2, 1500.00, 1, 16])
            }
        });  
    }
});


module.exports = db