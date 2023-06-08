class Validator {
	constructor (name) {
		this.name = name;
	}
	validateUsername(userName) {
		
		const re = /^[^\d][a-z\-\_0-9]+[^0-9][^\-\_]/i;
		// const re = /\d/    [-_][0-9]
		console.log(re.test(userName))
		return re.test(userName);
		//Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);

	}
}

let validator = new Validator();

validator.validateUsername('Nikita111')