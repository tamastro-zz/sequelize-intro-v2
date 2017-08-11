'use strict';
module.exports = function (sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    full_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Email already exist'
      },
      validate: {
        isEmail: {
          msg: 'this is not an Email',
        }
      }
    }
  })

  Student.associate = (models) => {
    Student.belongsToMany(models.Subject, {
      through: `SubjectStudent`,
      foreignKey: `StudentId`
    })
  };
  return Student;
};