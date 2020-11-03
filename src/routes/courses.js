const express = require('express');
const router = express.Router();
const CourseController = require('../app/controller/CourseController');

// CourseController.index

router.get('/:slug', CourseController.detail);

module.exports = router;
