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

		this.indexRouter    = require('./routes/index')
		this.productsRouter = require('./routes/products')

		this.app = this.express()

		this.app.set('views', this.path.join(__dirname, 'views'))
		this.app.set('view engine', 'ejs')
		this.app.use(this.logger('dev'))
		this.app.use(this.express.json())
		this.app.use(this.expressLayout)
		this.app.use(this.bodyParser.urlencoded({ extended: true }))
		this.app.use(this.cookieParser())
		this.app.use(this.express.static(this.path.join(__dirname, '../public')))

		this.app.use('/', this.indexRouter)
		this.app.use('/products', this.productsRouter)

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
			res.render('pages/error', helperResponse)
		});
	}
}

const app = new App()

module.exports = app.app