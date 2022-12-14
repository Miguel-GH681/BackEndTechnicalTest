const Departamento = require('../models/departamento.model');

const getDepartamentos = async (req, res)=>{
    await Departamento.findAll({}).then( departamentos=>{
        res.json(departamentos);
    })
}

module.exports = {
    getDepartamentos
}