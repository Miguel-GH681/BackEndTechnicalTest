const { Model, DataTypes } = require('sequelize');
const connection = require('../utilities/database.connection');
const DepartamentoModel = require('./DepartamentoModel');

class PersonaModel extends Model {}

PersonaModel.init({
    IdPersona : {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    NombreCompleto : DataTypes.STRING,
    Direccion: DataTypes.STRING,
    Pais : DataTypes.STRING,
    Depto : DataTypes.STRING   
    },
    {
        sequelize: connection,
        modelName: 'Persona',
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    });

PersonaModel.belongsTo(DepartamentoModel, {foreignKey: 'Pais'});
PersonaModel.belongsTo(DepartamentoModel, {foreignKey: 'Depto'});
DepartamentoModel.hasMany(PersonaModel, {foreignKey: 'Pais'});
DepartamentoModel.hasMany(PersonaModel, {foreignKey: 'Depto'});

module.exports = PersonaModel;