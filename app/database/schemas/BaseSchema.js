
class BaseSchema {
    constructor(name, fields) {
        this.name     = name
        this.fields   = fields
        this.mongoose = require('mongoose')
        this.schema   = this.mongoose.Schema
        this.db       = require('../DataBase')
    }
    getModel(){
        return this.mongoose.model(this.name, new this.schema(this.fields))
    }
}

module.exports = BaseSchema