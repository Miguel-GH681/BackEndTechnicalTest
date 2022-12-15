const DepartamentoModel = require('../models/DepartamentoModel');

const getDepartamentos = async (req, res)=>{
    const departamentos = await DepartamentoModel.findAll({});
    res.json(departamentos);
}

module.exports = {
    getDepartamentos
}