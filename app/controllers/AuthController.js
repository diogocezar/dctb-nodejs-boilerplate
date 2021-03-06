/**
 * Auth controller with middleware to verify if user is logged
 */

const BaseController = require('./BaseController');

class AuthController extends BaseController{
	constructor(){
		super()
		this.users               = require('../models/UserModel')
		this.helperResponse      = require('../helpers/HelperResponse')
		this.config              = require('../config/Config')
	}
	verify(req, res){
		const AuthController = this;
		this.users.findOne({
			login: req.body.login
		}, function(err, user){
			AuthController.onError(err)
			if(!user){
				res.json({
					success: false,
					message: 'Authentication failed. User not found.'
				});
			}
			else{
				if(user.password != req.body.password){
					res.json({
						success: false,
						message: 'Authentication failed. Wrong password.'
					});
				}
				else{
					req.session.admin = true;
					res.redirect('/')
				}
			}
		})
	}
	logout(req, res) {
		const AuthController = this;
		req.session.destroy(function(err){
			AuthController.onError(err)
			res.redirect('/login')
		})
	}
	middleWare(req, res, next){
		if(req.session && req.session.admin == true)
			next();
		else
			res.redirect('/login')
	}
}

const authController = new AuthController();

module.exports = authController;