const BaseSchema = require('./BaseSchema');

class UserSchema extends BaseSchema{
    constructor() {
        super('users', {
            name     : String,
            login    : String,
            password : String,
            admin    : Boolean
        })
    }
}

const userSchema = new UserSchema();

module.exports = userSchema.getModel();