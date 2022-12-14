const express = require('express');
const router = express.Router();

const paisController = require('../controllers/pais.controller');

router.get('/getPaises', paisController.getPaises);

module.exports = router;