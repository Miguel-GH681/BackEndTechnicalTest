const { Model, DataTypes } = require('sequelize');
const connection = require('../utilities/database.connection');

const Pais = require('../models/pais.model');

class Departamento extends Model {}
Departamento.init({
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

Departamento.belongsTo(Pais, {foreignKey: 'Pais'});
Pais.hasMany(Departamento, {foreignKey: 'Pais'});

module.exports = Departamento;