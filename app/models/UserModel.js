const BaseModel = require('./BaseModel');

class UserModel extends BaseModel{
	constructor(){
		const userModel = require('../database/schemas/UserSchema');
		super(userModel);
	}
}

const userModel = new userModel();

module.exports = userModel