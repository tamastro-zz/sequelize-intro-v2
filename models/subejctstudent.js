'use strict';
module.exports = function (sequelize, DataTypes) {
  var SubjectStudent = sequelize.define('SubjectStudent', {
    SubjectId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  })
  SubjectStudent.associate = (models) => {
    SubjectStudent.belongsTo(models.Subject)
    SubjectStudent.belongsTo(models.Student)
  };;
  return SubjectStudent;
};
