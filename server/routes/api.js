const express = require('express');
const router = express.Router();

// Contoh rute API
router.get('/', (req, res) => {
    res.send('API Endpoint');
});

module.exports = router;
