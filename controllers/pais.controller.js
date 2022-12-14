const res = require('express/lib/response');
const Pais = require('../models/pais.model');

const getPaises = async (req, res)=>{
    await Pais.findAll({}).then(paises =>{
        res.json(paises);
    })
}

module.exports = {
    getPaises
}