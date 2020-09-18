const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videos_controller.js');

router.get('/', videosController.getAllVideos);
router.post('/', videosController.createVideo);
router.get('/:id', videosController.getSingleVideo);
router.get('/:id/like', videosController.likeVideo);

module.exports = router;