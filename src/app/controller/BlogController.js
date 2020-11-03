class BlogController {
    // get /blogs
    index(req, res) {
        res.render('blog');
    }

    // get detail
    detail(req, res) {
        res.send('Detail');
    }
}

module.exports = new BlogController();
