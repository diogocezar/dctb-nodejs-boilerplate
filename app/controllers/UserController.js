const BaseController = require('./BaseController');

class UserController extends BaseController{
	constructor(){
		super()
		this.model               = require('../models/UserModel')
		this.helperResponse      = require('../helpers/HelperResponse')
		this.helperResponse.path = "../"
	}
	list(req, res){
		this.model.findAll((err, data) => {
			this.onError(err)
			this.helperResponse.data = data;
			res.render('pages/user/list', this.helperResponse)
		});
	}
	form(req, res) {
		this.helperResponse.data = {name: '', login: '', password:'', admin:true, _id:''}
		res.render('pages/user/form', this.helperResponse)
	}
	formWithData(req, res) {
		var id = req.params.id
		this.model.findOne(id, (err, data) => {
			this.onError(err)
			this.helperResponse.data = data
			console.log(data)
			this.helperResponse.path = "../../"
			res.render('pages/user/form', this.helperResponse)
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
				res.redirect('/user/list')
			})
		} else {
			this.model.insert({
				name     : name,
				login    : login,
				password : password,
				admin    : admin
			}, (err, result) => {
				this.onError(err)
				res.redirect('/user/list')
			})
		}
	}
	delete(req, res){
		var id = req.params.id
		this.model.deleteOne(id, (err, result) => {
			this.onError(err)
			res.redirect('/user/list')
		});
	}
}

const userController = new UserController();

module.exports = userController;