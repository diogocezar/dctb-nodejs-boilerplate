/**
 * This helper return to view, an HelperResponse object with defaults
 * path and dist that will be used on front-end
 * when used with returnWithReq is possible use request object
 * this is used to return if user is logged to front-end
 */

class HelperResponse{
	constructor() {
		this.config = require('../config/Config')
		this.path   = this.config.defaultPath
		this.dist   = this.config.dist
	}
	returnWithReq(req){
		if (req.session)
			this.logged = req.session.admin || false;
		return this;
	}
}

const helperResponse = new HelperResponse()

module.exports = helperResponse;