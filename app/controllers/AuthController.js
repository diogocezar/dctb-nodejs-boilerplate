const BaseController = require('./BaseController');

class AuthController extends BaseController{
	constructor(){
		super()
		this.users               = require('../models/UserModel')
		this.helperResponse      = require('../helpers/HelperResponse')
		this.helperResponse.path = "../"
		this.jwt                 = require('jsonwebtoken')
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
					const payLoad = {
						admin: user.admin
					}
					const token = AuthController.jwt.sign(payLoad, AuthController.config.secret, {
						expiresIn: '2 days'
					})
					/*res.json({
						sucess  : true,
						message : 'Enjoy your token!',
						token   : token
					})*/
					res.redirect('/under-auth?token=' + token)
				}
			}
		})
	}
	middleWare(req, res, next){
		const token = req.body.token || req.query.token || req.headers['x-access-token']
		if(token){
			this.jwt.verify(token, this.config.secret, function(err, decoded){
				if(err){
					return res.json({
						sucess  : false,
						message : "Failed to authenticate token." 
					})
				}
				else{
					req.decoded = decoded;
					next();
				}
			})
		}
		else{
			return res.status(403).send({
				sucess: false,
				message: 'No token priveded.'
			})
		}
	}
}

const authController = new AuthController();

module.exports = authController;