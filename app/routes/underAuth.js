const AuthRoute = require('./auth');

/**
 * This class represents underAuth routes
 */
class UnderAuthRoute extends AuthRoute {
    constructor() {
        super()
        this.setRoutes();
    }
    setRoutes() {
        this.router.get('/', function (req, res, next) {
            console.log('chegou');
            const helperResponse = require('../helpers/HelperResponse')
            res.render('pages/under-auth/index', helperResponse);
        });
    }
}

const router = new UnderAuthRoute();

module.exports = router.router;