/**
 * DataBase configuration class
 */
class DataBase{
	/**
	 * Constructor
	 */
	constructor(){
		this.config   = require('../config/config')
		this.mongoose = require('mongoose')
		this.connect()
	}
	/**
	 * Return connection string
	 */
	getConnString(config){
		return `mongodb://${config.dataBase.host}:${config.dataBase.port}/${config.dataBase.base}`;
	}
	/**
	 * Connect to database
	 */
	connect(){
		this.mongoose.connect(this.getConnString(this.config));
	}
}

const dataBase = new DataBase()

module.exports = dataBase