'use strict';
module.exports = (sequelize, DataTypes) => {
    const animal = sequelize.define('Animal', {
        ICAD: DataTypes.INT,
        Tatouage: DataTypes.STRING,
        NomAnimal: DataTypes.STRING,
        DateNaissAnimal: DataTypes.DATE,
        Deces: DataTypes.STRING,
        HistoireAnimal: DataTypes.BLOB,
        DescriptionAnimal: DataTypes.BLOB,
        DateEntreeAnimal: DataTypes.DATE,
        Sterilisation: DataTypes.INT,
        DateSterilisation: DataTypes.DATE,
        idStatutSterilisation: DataTypes.INT,
        CouleursAnimal: DataTypes.STRING,
        Race:DataTypes.STRING,
        EspeceAnimal:DataTypes.STRING,
        Sexe:DataTypes.STRING
    }, {});
    animal.associate = function(models) {
        // associations can be defined here
    };
    return animal;
};