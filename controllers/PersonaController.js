const PersonaModel = require('../models/PersonaModel');

const getPersonas = async (req, res)=>{
    const personas = await PersonaModel.findAll({});

    res.json(personas);
}

module.exports = {
    getPersonas
}