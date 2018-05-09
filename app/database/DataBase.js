/**
 * DataBase Configuration Class
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
	 * Return Connection String
	 */
	getConnString(config){
		return `mongodb://${config.dataBase.host}:${config.dataBase.port}/${config.dataBase.base}`;
	}
	/**
	 * Connect to DataBase
	 */
	connect(){
		this.mongoose.connect(this.getConnString(this.config));
	}
}

const dataBase = new DataBase()

module.exports = dataBase