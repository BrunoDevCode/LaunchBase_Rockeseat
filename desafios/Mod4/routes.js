const routes = require('express').Router()

const TeachersController = require('./TeachersController');

routes.get('/', (req, res) => {
    return res.redirect('/teachers')
})

routes.get('/teachers', (req, res) => {
    return res.render('teacher/index')
})

routes.get('/teachers/create', (req, res) => {
    return res.render('teacher/create')
})

routes.post('/teachers', TeachersController.post)

module.exports = routes