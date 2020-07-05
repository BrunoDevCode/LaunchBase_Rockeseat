const routes = require('express').Router()

routes.get('/', (req, res) => {
    return res.redirect('/teachers')
})

routes.get('/teachers', (req, res) => {
    return res.render('teacher/index')
})

module.exports = routes