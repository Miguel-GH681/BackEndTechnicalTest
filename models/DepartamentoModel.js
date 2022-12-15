const { Model, DataTypes } = require('sequelize');
const connection = require('../utilities/database.connection');

const PaisModel = require('../models/PaisModel');

class DepartamentoModel extends Model {}
DepartamentoModel.init({
    Pais : {
        type: DataTypes.STRING,
        primaryKey: true
    },
    Depto : {
        type: DataTypes.STRING,
        primaryKey: true
    },
    NomDepto: DataTypes.STRING
    }, {
        sequelize: connection,
        modelName: 'Departamento',
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    })

DepartamentoModel.belongsTo(PaisModel, {foreignKey: 'Pais'});
PaisModel.hasMany(DepartamentoModel, {foreignKey: 'Pais'});

module.exports = DepartamentoModel;