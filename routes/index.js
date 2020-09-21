module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/', require('./auth.routes.js'))
    app.use('/places', require('./places.routes.js'))
    app.use('/recipes', require('./recipes.routes.js'))
    app.use('/api', require('./api.routes'))
    

}
