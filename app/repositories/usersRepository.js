const db = require("../../config/database")

const GetUserInfo = async () => {
	let sql = "select * from users limit 1;"
	let params = []
	let result;
	console.log("Antesssss");
	await db.get(sql, params, (err, row) => {
			if (err) {
				console.error("Erroooooo");
				result = {
					code: 400,
					data: err.message
				}
			}
			console.log("Sem Erroooooooo");
			result = {
					code: 200,
					data: row
			}
		});
	console.log("Depoisssss");
	return result;
}

module.exports = {
	GetUserInfo
}