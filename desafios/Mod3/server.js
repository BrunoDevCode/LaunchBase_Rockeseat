const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server
})

server.get('/', (req, res) => {
    return res.render('links')
})

server.get('/about', (req, res) => {
    return res.render('about')
})

server.get('/conteudo', (req, res) => {
    return res.render('conteudo')
})

server.use((req, res) => {
    return res.status(404).render('not-found')
})

server.listen(3000, () => {
    console.log('> Server runing')
})