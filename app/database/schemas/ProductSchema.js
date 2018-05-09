const BaseSchema = require('./BaseSchema');

class ProductSchema extends BaseSchema{
    constructor() {
        super('products', {
            name: String,
            price: Number
        })
    }
}

const productSchema = new ProductSchema();

module.exports = productSchema.getModel();