/**
 * This class will be extended by all routes that need Auth
 */
class AuthRoute {
    constructor() {
        this.router = require('express').Router()
        this.controller = require('../controllers/AuthController');
        this.setRoutes();
    }
    setRoutes() {
        this.router.get('/login', function (req, res){
            this.controller.login(req, res);
        })
        this.router.use(function(req, res, next){
            this.controller.middleWare(req, res, next);
        })
    }
}

module.exports = AuthRoute