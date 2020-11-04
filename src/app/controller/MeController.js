const Course = require('../models/Course');
const { convertListToObject } = require('../../until/mongoose.js');

class MeController {
    // get /blogs
    storeCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/courses', {
                    courses: convertListToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
