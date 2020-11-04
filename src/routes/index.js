const blogRouter = require('./blog');
const siteRouter = require('./site');
const courseRouter = require('./courses');
const meRouter = require('./me');

function routes(app) {
    app.use('/blog', blogRouter);
    app.use('/courses', courseRouter);
    app.use('/me', meRouter);

    app.use('/', siteRouter);

    app.get('*', (req, res) => {
        res.render('notfound');
    });
}

module.exports = routes;
