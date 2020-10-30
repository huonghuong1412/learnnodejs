const blogRouter = require("./blog")
const siteRouter = require('./site')

function routes(app) {

    app.use('/blog', blogRouter)

    app.use('/', siteRouter)

    app.get('*', (req, res) => {
        res.render('notfound');
    })
}

module.exports = routes;