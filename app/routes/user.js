/**
 * This class representes Product Routes
 */
class UserRoute{
	constructor(){
		this.router     = require('express').Router()
		this.controller = require('../controllers/UserController')
		this.setRoutes();
	}
	setRoutes(){
		const UserRoute = this;
		this.router.get('/list', function (req, res) {
			UserRoute.controller.list(req, res);
		});

		this.router.get('/form', function (req, res){
			UserRoute.controller.form(req, res);
		});

		this.router.get('/form/:id', function (req, res){
			UserRoute.controller.formWithData(req, res);
		});

		this.router.post('/save', function (req, res){
			UserRoute.controller.save(req, res);
		});

		this.router.get('/delete/:id', function (req, res){
			UserRoute.controller.delete(req, res);
		});
	}
}

const router = new UserRoute();

module.exports = router.router;