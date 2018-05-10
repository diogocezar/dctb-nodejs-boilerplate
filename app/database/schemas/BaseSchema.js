
/**
 * This class is a base schema that will be used by other schemas
 */

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