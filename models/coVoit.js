'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coVoit', {
    idcoVoit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'idcoVoit'
    },
    nomCovoit: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'nomCovoit'
    }
  }, {
    tableName: 'coVoit'
  });
};
