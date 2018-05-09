/**
 * This class representes Product Routes
 */
class ProductRoute{
	constructor(){
		this.router     = require('express').Router()
		this.controller = require('../controllers/ProductController')
		this.setRoutes();
	}
	setRoutes(){
		const ProductRoute = this;
		this.router.get('/list', function (req, res) {
			ProductRoute.controller.list(req, res);
		});

		this.router.get('/form', function (req, res){
			ProductRoute.controller.form(req, res);
		});

		this.router.get('/form/:id', function (req, res){
			ProductRoute.controller.formWithData(req, res);
		});

		this.router.post('/save', function (req, res){
			ProductRoute.controller.save(req, res);
		});

		this.router.get('/delete/:id', function (req, res){
			ProductRoute.controller.delete(req, res);
		});
	}
}

const router = new ProductRoute();

module.exports = router.router;