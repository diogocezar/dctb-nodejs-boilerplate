const AuthRoute = require('./auth');

/**
 * This class represents underAuth routes
 */
class UnderAuthRoute extends AuthRoute {
    constructor() {
        super()
    }
    setRoutes() {
        this.router.get('/', function (req, res, next) {
            const helperResponse = require('../helpers/HelperResponse')
            res.render('pages/under-auth', helperResponse);
        });
    }
}

const router = new UnderAuthRoute();

module.exports = router.router;