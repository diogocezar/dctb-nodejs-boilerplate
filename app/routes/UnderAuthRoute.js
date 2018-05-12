/**
 * This class representes a rout that need authentication
 * just need to extend AuthRoute an invoke super()
 */

const AuthRoute = require('./AuthRoute');

class UnderAuthRoute extends AuthRoute {
    constructor() {
        super()
        this.setRoutes();
    }
    setRoutes() {
        this.router.get('/', function (req, res, next) {
            const helperResponse = require('../helpers/HelperResponse')
            res.render('pages/under-auth/index', helperResponse.returnWithReq(req));
        });
    }
}

const router = new UnderAuthRoute();

module.exports = router.router;