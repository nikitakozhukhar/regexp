class Validator {
	constructor (name) {
		this.name = name;
	}
	validateUsername(userName) {
		
		const re = /[a-z][^0-9]/i;
		// const re = /\d/    [-_][0-9]
		console.log(re.test(userName))
		return re.test(userName);
		//Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);

	}
}

let validator = new Validator();

validator.validateUsername('Nikita111')