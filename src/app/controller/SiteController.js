
class SiteController {
    // home page
    index(req, res) {
        res.render('home')
    };
    // search page
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController;