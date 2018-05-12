/**
 * This class will be extended by all routes that need Auth
 */

class AuthRoute {
    constructor() {
        this.router = require('express').Router()
        this.controllerAuth = require('../controllers/AuthController');
        this.setAuth();
    }
    setAuth() {
        const AuthRoute = this;
        this.router.use(function (req, res, next) {
            AuthRoute.controllerAuth.middleWare(req, res, next);
        })
    }
}

module.exports = AuthRoute