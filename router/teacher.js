const express = require('express')
const router = express.Router()
const setup = require('../models');



router.get('/', (req, res) => {
  setup.Teacher.findAll({
      include: [setup.Subject],
      order: [
        ['first_name', 'ASC']
      ]
    })
    .then(teach => {
      res.render('teacher', {
        dataTcui: teach
      })
    })
})

router.get('/add', (req, res) => {
  setup.Teacher.findAll()
    .then(teach => {
      setup.Subject.findAll()
        .then(sub => {
          res.render('addT', {
            dataTcui: teach,
            subs: sub,
            errs: ''
          })
        })
    })
})

router.post('/add', (req, res) => {
  setup.Teacher.create({
      first_name: `${req.body.depan}`,
      last_name: `${req.body.belakang}`,
      email: `${req.body.email}`,
      SubjectId: `${req.body.subId}`,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(() => {
      res.redirect('/teacher')
    })
    .catch((err) => {
      res.render('/teacher/add', (erra => {
        errs = err
      }))
    })
})

router.get('/edit/:id', (req, res) => {
  setup.Teacher.findAll({
      include: [setup.Subject],
      where: {
        id: req.params.id
      }
    })
    .then(teach => {
      setup.Subject.findAll({
          include: [setup.Teacher]
        })
        .then(sub => {
          console.log(teach);
          res.render('editT', {
            dataTcui: teach,
            subs: sub
          })
        })
    })
})

router.post('/edit/:id', (req, res) => {
  setup.Teacher.update({
      first_name: `${req.body.depan}`,
      last_name: `${req.body.belakang}`,
      email: `${req.body.email}`,
      SubjectId: `${req.body.subId}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      res.redirect('/teacher')
    })
    .catch(() => {
      res.redirect(`/teacher/edit/${req.params.id}`)
    })
})

router.get('/delete/:id', (req, res) => {
  setup.Teacher.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      res.redirect('/teacher')
    })
})

module.exports = router