const express = require('express');
const router = express.Router();
const { createChannel, getChannel, getAllChannels } = require('../controllers/channelController');

// Create Channel
router.post('/create', createChannel);

// Get Channel
router.get('/:id', getChannel);

// Get All Channels
router.get('/', getAllChannels);

module.exports = router;
