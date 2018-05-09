const BaseController = require('./BaseController');

class ProductController extends BaseController{
	constructor(){
		super()
		this.model = require('../models/ProductModel')
		this.helperResponse = require('../helpers/HelperResponse')
		this.helperResponse.path = "../"
	}
	list(req, res){
		this.model.findAll((err, data) => {
			this.onError(err)
			this.helperResponse.data = data;
			res.render('pages/products-list', this.helperResponse)
		});
	}
	form(req, res) {
		this.helperResponse.data = {name: '', price: '', _id:''}
		res.render('pages/products-form', this.helperResponse)
	}
	formWithData(req, res) {
		var id = req.params.id
		this.model.findOne(id, (err, data) => {
			this.onError(err)
			this.helperResponse.data = data
			this.helperResponse.path = "../../"
			res.render('pages/products-form', this.helperResponse)
		})
	}
	save(req, res){
		const name  = req.body.name
		const price = parseFloat(req.body.price)
		const id    = req.body.id
		if (id){
			this.model.updateOne(id, {
				name  : name,
				price : price
			}, (err, result) => {
				this.onError(err)
				res.redirect('/products/list')
			})
		} else {
			this.model.insert({
				name : name,
				price : price
			}, (err, result) => {
				this.onError(err)
				res.redirect('/products/list')
			})
		}
	}
	delete(req, res){
		var id = req.params.id
		this.model.deleteOne(id, (err, result) => {
			this.onError(err)
			res.redirect('/products/list')
		});
	}
}

const productController = new ProductController();

module.exports = productController;