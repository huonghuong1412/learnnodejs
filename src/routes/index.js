const blogRouter = require('./blog');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function routes(app) {
    app.use('/blog', blogRouter);
    app.use('/courses', courseRouter);

    app.use('/', siteRouter);

    app.get('*', (req, res) => {
        res.render('notfound');
    });
}

module.exports = routes;
