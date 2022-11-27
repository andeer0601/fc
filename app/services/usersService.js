const _usersService = require("../repositories/usersRepository");

const GetUserInfo = async () => {
	let result = await _usersService.GetUserInfo();
	console.log(result);
	return result;
}

module.exports = {
	GetUserInfo
}