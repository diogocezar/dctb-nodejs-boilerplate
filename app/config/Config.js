/**
 * Setting configurations
 */
class Config{
	constructor(){
		this.dataBase = {
			host: 'localhost',
			port: '27017',
			base: 'products-list'
		},
		this.port        = 3000,
		this.dist        = 'src',
		this.defaultPath = './',
		this.secret      = 'asimplesecret'
	}
}

const config = new Config()

module.exports = config