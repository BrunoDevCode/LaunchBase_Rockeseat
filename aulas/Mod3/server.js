const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false
})

server.get('/', function(res, res) {
    const about = {
        avatar_url: 'https://avatars3.githubusercontent.com/u/45718816?s=400&u=421d3cf1dc5ee8b08263a9c2308fb31d0d1a7824&v=4',
        name: 'Bruno Henrique',
        role: 'Desenvolvedor Full-Stack JS',
        description: 'Desenvolvedor FullStack em JS com o maior prazer para o ramo do desenvolvimento',
        links: [
            {name: 'Github', url: 'https://github.com/BrunoDevCode/'},
            {name: 'Twetter', url: 'https://twitter.com/BrunoH272'},
            {name: 'LinkedIn', url: 'https://linkedin.com/in/BrunoH5'}
        ]
    }

    return res.render('about', {about})
})

server.get('/portfolio', function(res, res) {
    return res.render('portifolio', { items: videos })
})

server.listen(5000, function() {
    console.log('Server is running')
})