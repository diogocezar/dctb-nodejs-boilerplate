/**
 * This class represents Index Routes
 */
class IndexRoute {
	constructor() {
		this.router = require('express').Router()
		this.setRoutes();
	}
	setRoutes() {
		this.router.get('/', function (req, res, next) {
			const helperResponse = require('../helpers/HelperResponse')
			res.render('pages/index', helperResponse);
		});
	}
}

const router = new IndexRoute();

module.exports = router.router;