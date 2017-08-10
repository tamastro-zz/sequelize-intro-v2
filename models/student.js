'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    full_name: DataTypes.STRING,
    email: {type: DataTypes.STRING,
    validate: {
      isEmail: {
        msg: 'this is not an Email'
      }
    }}
  });
  return Student;
};