'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Subjects', [{
      subject_name: 'Node JS',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      subject_name: 'Vue JS',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
       subject_name: 'React JS',
       createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
