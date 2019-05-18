'use strict';
module.exports = (sequelize, DataTypes) => {
    const personne = sequelize.define('Personne', {
        nomP: DataTypes.STRING,
        prenomP: DataTypes.STRING,
        facebookP: DataTypes.STRING,
        dateNaissanceP: DataTypes.DATE,
        rueP:DataTypes.STRING,
        telDomicileP:DataTypes.STRING,
        telPortableP:DataTypes.STRING,
        telAutreP:DataTypes.STRING,
        idLieu: DataTypes.INT,
        emailP:DataTypes.STRING,
        commentaires:DataTypes.STRING,
        bloque:DataTypes.INT,
        idPrevisiteFA:DataTypes.INT,
        FA:DataTypes.STRING,
    }, {});
    personne.associate = function(models) {
        // associations can be defined here
    };
    return personne;
};