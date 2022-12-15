const PaisModel = require('../models/PaisModel');

const getPaises = async (req, res)=>{
    const paises = await PaisModel.findAll({});
    res.json(paises)
}

module.exports = {
    getPaises
}