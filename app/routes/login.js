/**
 * This class represents login routes
 */
class LoginRoute{
    constructor() {
 		this.router = require('express').Router()
        this.controller = require('../controllers/AuthController')
        this.helperResponse = require('../helpers/HelperResponse')
 		this.setRoutes();
    }
    setRoutes() {
        const LoginRoute = this;
        this.router.get('/', function(req,res){
            res.render('pages/login/form', LoginRoute.helperResponse)
        })
        this.router.post('/verify', function (req, res){
            LoginRoute.controller.verify(req, res);
        })
    }
}

const router = new LoginRoute();

module.exports = router.router;