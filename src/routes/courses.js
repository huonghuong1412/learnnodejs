const express = require('express');
const router = express.Router();
const CourseController = require('../app/controller/CourseController');

// CourseController.index

router.get('/create', CourseController.create);
router.get('/:id/edit', CourseController.edit); // get item update
router.put('/:id', CourseController.update); // put item update
router.post('/store', CourseController.store);
router.get('/:slug', CourseController.detail);

module.exports = router;
