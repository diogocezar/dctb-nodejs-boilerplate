/**
 * This class will be extended by all other controllers
 */
class BaseController {
	onError(err){
		if (err){ return console.log(err) }
	}
}

module.exports = BaseController