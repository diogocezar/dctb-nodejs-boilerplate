/**
 * This class will be extended by all routes that need Auth
 */
class AuthRoute {
    constructor() {
        this.router = require('express').Router()
        this.controller = require('../controllers/AuthController');
        this.setAuth();
    }
    setAuth() {
        const AuthRoute = this;
        this.router.use(function (req, res, next) {
            AuthRoute.controller.middleWare(req, res, next);
        })
    }
}

module.exports = AuthRoute