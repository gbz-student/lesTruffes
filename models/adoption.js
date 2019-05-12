'use strict';
module.exports = (sequelize, DataTypes) => {
    var Adoption = sequelize.define('Adoption', {
        title: DataTypes.STRING
    });

    Adoption.associate = function (models) {
        models.Adoption.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Adoption;
};
