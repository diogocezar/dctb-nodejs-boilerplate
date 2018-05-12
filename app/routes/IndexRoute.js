/**
 * This class represents index routes
 */

class IndexRoute {
	constructor() {
		this.router = require('express').Router()
		this.setRoutes();
	}
	setRoutes() {
		this.router.get('/', function (req, res, next) {
			const helperResponse = require('../helpers/HelperResponse')
			res.render('pages/index/index', helperResponse.returnWithReq(req));
		});
	}
}

const router = new IndexRoute();

module.exports = router.router;