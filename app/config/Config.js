/**
 * Setting Configuration Class
 */
class Config{
	constructor(dataBase, port, dist, defaultPath){
		this.dataBase    = dataBase
		this.port        = port
		this.dist        = dist
		this.defaultPath = defaultPath
	}
}

/**
 * Creating Configuration Attributes
 */
const dataBaseConfig = {
	host: 'localhost',
	port: '27017',
	base: 'products-list'
}

const port        = 3000
const dist        = 'src'
const defaultPath = './'

/**
 * Setting objetct to return
 */
const config = new Config(dataBaseConfig, port, dist, defaultPath)
/**
 * Exporting Module
 */
module.exports = config