const express = require('express');
const personaController = require('../controllers/PersonaController');

const router = express.Router();

router.get('/getPersonas', personaController.getPersonas);

module.exports = router;