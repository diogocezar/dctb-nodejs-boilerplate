/**
 * This is the Main App Class
 */
class App{
	constructor(){
		this.express        = require('express')
		this.path           = require('path')
		this.cookieParser   = require('cookie-parser')
		this.logger         = require('morgan')
		this.expressLayout  = require('express-ejs-layouts')
		this.bodyParser     = require('body-parser')
		this.config         = require('./config/Config')

		// routes
		this.routes = {
			index     : require('./routes/IndexRoute'),
			product   : require('./routes/ProductRoute'),
			user      : require('./routes/UserRoute'),
			underAuth : require('./routes/UnderAuthRoute'),
			login     : require('./routes/LoginRoute'),
			logout    : require('./routes/LogoutRoute')
		}

		this.app = this.express()

		// session
		this.session = require('express-session')
		this.app.use(this.session({
			secret: this.config.secret,
			resave: true,
			saveUninitialized: true,
			maxAge: Date.now() + (30 * 86400 * 1000)
		}))

		this.app.set('views', this.path.join(__dirname, 'views'))
		this.app.set('view engine', 'ejs')
		this.app.use(this.logger('dev'))
		this.app.use(this.express.json())
		this.app.use(this.expressLayout)
		this.app.use(this.bodyParser.urlencoded({ extended: true }))
		this.app.use(this.cookieParser())
		this.app.use(this.express.static(this.path.join(__dirname, '../public')))

		this.app.use('/', this.routes.index)
		this.app.use('/product', this.routes.product)
		this.app.use('/user', this.routes.user)
		this.app.use('/under-auth', this.routes.underAuth)
		this.app.use('/login', this.routes.login)
		this.app.use('/logout', this.routes.logout)

		this.app.use(function (req, res, next) {
			const createError = require('http-errors')
			next(createError(404))
		});

		this.app.use(function (err, req, res, next) {
			console.log(err)
			const helperResponse = require('./helpers/HelperResponse')
			res.locals.message = err.message
			res.locals.error = req.app.get('env') === 'development' ? err : {}
			res.status(err.status || 500)
			res.render('pages/error/error', helperResponse)
		});
	}
}

const app = new App()

module.exports = app.app