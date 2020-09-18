const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments_controller.js');

// router.get('/', commentController.getVideoComments);
router.post('/', commentController.createComment);

module.exports = router;