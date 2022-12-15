const express = require('express');
const router = express.Router();

const paisController = require('../controllers/PaisController');

router.get('/getPaises', paisController.getPaises);

module.exports = router;