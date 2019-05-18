/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entente', {
    idEntente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'idEntente'
    },
    okEntente: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'okEntente'
    }
  }, {
    tableName: 'Entente'
  });
};
