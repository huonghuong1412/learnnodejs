const express = require('express');
const router = express.Router();
const BlogController = require('../app/controller/BlogController');

// BlogController.index

router.use('/:id', BlogController.detail);

router.use('/', BlogController.index);

module.exports = router;
