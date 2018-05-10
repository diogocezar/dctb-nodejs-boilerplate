/**
 * This class represents product model
 */

const BaseModel = require('./BaseModel');

class ProductModel extends BaseModel{
	constructor(){
		const productModel = require('../database/schemas/ProductSchema');
		super(productModel);
	}
}

const productModel = new ProductModel();

module.exports = productModel