const express = require('express');
const nunjucks = require('nunjucks');
const methodOverride = require('method-override');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.use(methodOverride('_method'));
server.use(require('./routes'));

server.listen(3333, () => {
  console.log('> Server runing');
});
