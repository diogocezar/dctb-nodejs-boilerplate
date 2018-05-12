/**
 * This class represents logout routes
 */

class LogoutRoute{
    constructor() {
 		this.router = require('express').Router()
        this.controller = require('../controllers/AuthController')
        this.helperResponse = require('../helpers/HelperResponse')
 		this.setRoutes();
    }
    setRoutes() {
        const LogoutRoute = this;
        this.router.get('/', function (req, res) {
            LogoutRoute.controller.logout(req, res);
        })
    }
}

const router = new LogoutRoute();

module.exports = router.router;