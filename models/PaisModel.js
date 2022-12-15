const { Model, DataTypes } = require('sequelize');
const connection = require('../utilities/database.connection');

class PaisModel extends Model{}
PaisModel.init({
    Pais : {
        type : DataTypes.STRING,
        primaryKey: true,
    },
    NomPais : DataTypes.STRING
    },{
        sequelize: connection,
        modelName: 'Pais',
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
});

module.exports = PaisModel;