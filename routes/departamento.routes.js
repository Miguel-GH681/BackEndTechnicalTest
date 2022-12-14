const express = require('express');
const router = express.Router();

const departamentoController = require('../controllers/departamento.controller');

router.get('/getDepartamentos', departamentoController.getDepartamentos);

module.exports = router;