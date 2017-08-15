'use strict';
module.exports = function (sequelize, DataTypes) {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING,
    StudentId: DataTypes.INTEGER
  })
  Subject.associate = (models) => {
    Subject.hasMany(models.Teacher)
    Subject.belongsToMany(models.Student, {
      through: `SubjectStudent`,
      foreignKey: `SubjectId`
    })
  };
  return Subject;
};
