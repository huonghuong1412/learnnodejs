const express = require('express');
const router = express.Router();
const meController = require('../app/controller/MeController');

// CourseController.index

router.get('/courses', meController.storeCourses);

module.exports = router;
