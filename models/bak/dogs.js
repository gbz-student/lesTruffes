'use strict';
module.exports = (sequelize, DataTypes) => {
    var Dogs = sequelize.define('Dogs', {
        title: DataTypes.STRING
    });

    Dogs.associate = function (models) {
        models.Dogs.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Dogs;
};