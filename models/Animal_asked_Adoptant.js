/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('animalAskedAdoptant', {
    idAnimal: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Animal',
        key: 'idAnimal'
      },
      field: 'idAnimal'
    },
    idPersonne: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Personne',
        key: 'idPersonne'
      },
      field: 'idPersonne'
    },
    adoptionValidee: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'adoptionValidee'
    },
    contratAdoption: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'contratAdoption'
    },
    dateContratRecu: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'dateContratRecu'
    },
    commentaires: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'commentaires'
    },
    idPrevisite: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Previsite',
        key: 'idPrevisite'
      },
      field: 'idPrevisite'
    },
    dateCessionIcad: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'DateCessionICAD'
    },
    paiement: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'Paiement'
    }
  }, {
    tableName: 'Animal_asked_Adoptant'
  });
};
