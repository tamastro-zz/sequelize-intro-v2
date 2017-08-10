const express = require('express')
const router = express.Router()
const db = require('../models');



router.get('/', (req, res) => {
    db.Student.findAll()
        .then(teach => {
            res.render('student', {
                dataTcui: teach
            })
        })
})

// router.post('/', (req, res) => {
//
// })

router.get('/add', (req, res) => {
    db.Student.findAll()
        .then(teach => {
            res.render('add', {
                dataTcui: teach,
                errs: req.query.errs
            })
        })
})

router.post('/add', (req, res) => {
    db.Student.create({
        first_name: `${req.body.depan}`,
        last_name: `${req.body.belakang}`,
        full_name: `${req.body.depan} ${req.body.belakang}`,
        email: `${req.body.email}`,
        createdAt: new Date(),
        updatedAt: new Date()
    })
        .then(() => {
            res.redirect('/student')
        })
        .catch(() => {
            res.redirect('/student/add?errs=Format Email Salah')
        })
})

router.get('/edit/:id', (req, res) => {
    db.Student.findAll({
        where: {
            id: req.params.id
        }
    })
        .then(teach => {
            res.render('edit', {
                dataTcui: teach,
                errs: req.query.errs
            })
        })
})

router.post('/edit/:id', (req, res) => {
    db.Student.update({
        first_name: `${req.body.depan}`,
        last_name: `${req.body.belakang}`,
        full_name: `${req.body.depan} ${req.body.belakang}`,
        email: `${req.body.email}`,
        updatedAt: new Date()
    }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/student')
        })
        .catch(() => {
            res.redirect(`/student/edit/${req.params.id}?errs=Format Email Salah`)
        })
})

router.get('/delete/:id', (req, res) => {
    db.Student.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.redirect('/student')
        })
})


module.exports = router