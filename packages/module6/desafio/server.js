const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const empresa = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true,
});

server.get('/', (req, res) => {
    return res.render('links', {empresa})
})

server.get('/about', (req, res) => {
    return res.render('about', {empresa})
})

server.get('/conteudo', (req, res) => {
    return res.render('conteudo', {empresa})
})

server.get('/courses/:id', (req, res) => {
    const id = req.params.id

    const video = empresa.cards.find((cards) => {
        return cards.id == id
    })

    if(!video)
        return res.send('Course not found')

    return res.render('courses', {video})
})

server.use((req, res) => {
    return res.status(404).render('not-found')
})

server.listen(3333, () => {
    console.log('> Server runing')
})