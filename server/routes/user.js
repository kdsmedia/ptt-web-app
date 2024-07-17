const express = require('express');
const router = express.Router();
const { getUser, getAllUsers } = require('../controllers/userController');

// Get User
router.get('/:id', getUser);

// Get All Users
router.get('/', getAllUsers);

module.exports = router;
