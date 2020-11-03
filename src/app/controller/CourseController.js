const Course = require('../models/Course');
const { convertItemToObject } = require('../../until/mongoose');

class CourseController {
    // get detail
    detail(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                // res.json(course)
                res.render('courses/detail', {
                    course: convertItemToObject(course),
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
