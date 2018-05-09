const BaseController = require('./BaseController');

class UserController extends BaseController{
	constructor(){
		super()
		this.model               = require('../models/ProductModel')
		this.helperResponse      = require('../helpers/HelperResponse')
		this.helperResponse.path = "../"
	}
	list(req, res){
		this.model.findAll((err, data) => {
			this.onError(err)
			this.helperResponse.data = data;
			res.render('pages/users-list', this.helperResponse)
		});
	}
	form(req, res) {
		this.helperResponse.data = {name: '', login: '', password:'', admin:true, _id:''}
		res.render('pages/users-form', this.helperResponse)
	}
	formWithData(req, res) {
		var id = req.params.id
		this.model.findOne(id, (err, data) => {
			this.onError(err)
			this.helperResponse.data = data
			this.helperResponse.path = "../../"
			res.render('pages/users-form', this.helperResponse)
		})
	}
	save(req, res){
		const name     = req.body.name
		const login    = req.body.login
		const password = req.body.password
		const admin    = false
		const id       = req.body.id
		if (id){
			this.model.updateOne(id, {
				name     : name,
				login    : login,
				password : password,
				admin    : admin
			}, (err, result) => {
				this.onError(err)
				res.redirect('/users/list')
			})
		} else {
			this.model.insert({
				name     : name,
				login    : login,
				password : password,
				admin    : admin
			}, (err, result) => {
				this.onError(err)
				res.redirect('/users/list')
			})
		}
	}
	delete(req, res){
		var id = req.params.id
		this.model.deleteOne(id, (err, result) => {
			this.onError(err)
			res.redirect('/users/list')
		});
	}
}

const userController = new UserController();

module.exports = userController;