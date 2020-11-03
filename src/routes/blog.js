const express = require('express');
const router = express.Router();
const BlogController = require('../app/controller/BlogController');

// BlogController.index

router.get('/:id', BlogController.detail);

router.get('/', BlogController.index);

module.exports = router;
