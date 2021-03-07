const routes = require('express').Router();
const teachers = require('./teachers');

routes.get('/', (request, response) => {
  return response.redirect('/teachers');
});

routes.get('/teachers', (request, response) => {
  return response.render('teachers/index');
});

routes.get('/teachers/create', (req, res) => {
  return res.render('teachers/create');
});

routes.post('/teachers/create', teachers.create);

routes.get('/teachers/:id', teachers.show);

routes.get('/teachers/:id/edit', teachers.edit);

routes.put('/teachers', teachers.put);

routes.delete('/teachers', teachers.delete);

routes.get('/students', (request, response) => {
  return response.render('students/index');
});

module.exports = routes;
