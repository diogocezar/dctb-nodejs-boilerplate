/**
 * This helper return to view, an HelperResponse object with defaults
 * Path and Dist that will be used on Front-End
 */
class HelperResponse{
	constructor() {
		this.config = require('../config/Config')
		this.path   = this.config.defaultPath
		this.dist   = this.config.dist
	}
}

const helperResponse = new HelperResponse()

module.exports = helperResponse;