const express = require('express');
const router = express.Router();

const departamentoController = require('../controllers/DepartamentoController');

router.get('/getDepartamentos', departamentoController.getDepartamentos);

module.exports = router;