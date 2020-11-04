const Course = require('../models/Course');
const { convertItemToObject } = require('../../until/mongoose');

class CourseController {
    // get detail /courses/:slug
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

    // /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // /courses/store
    store(req, res, next) {
        // res.json(req.body)
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save().then(() => res.redirect('/'));
    }

    // get /courses/:id/edit

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', {
                    course: convertItemToObject(course),
                });
            })
            .catch(next);
    }

    // put /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/courses'))
            .catch(next);
    }
}

module.exports = new CourseController();
