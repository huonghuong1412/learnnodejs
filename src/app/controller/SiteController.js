const Course = require('../models/Course');
const { convertListToObject } = require('../../until/mongoose');

class SiteController {
    // home page
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: convertListToObject(courses),
                });
            })
            .catch(next);
        // .catch(err => res.send('404 - Not found'))
    }
    // search page
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
