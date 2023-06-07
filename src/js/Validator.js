class Validator {
	constructor (name) {
		this.name = name;
	}
	validateUsername(userName) {
		this.userName = userName;
		const re = /(^[а-я])[-_][0-9]/i;
		console.log(re.test(userName))
		return re.test(userName);
		//Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);

	}
}