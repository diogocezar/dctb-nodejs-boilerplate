/**
 * This class representes a user routes that need authentication
 * just need to extend AuthRoute an invoke super()
 */

const AuthRoute = require('./auth');

class UserRoute extends AuthRoute {
	constructor(){
		super()
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