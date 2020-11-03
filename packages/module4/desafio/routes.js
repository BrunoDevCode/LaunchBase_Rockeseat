const routes = require('express').Router();
const teachers = require('./teachers');

routes.get('/', (request, response) => {
  return response.redirect('/teachers')
})

routes.get('/teachers', (request, response) => {
  return response.render('teachers/index')
})

routes.get('/teachers/create', teachers.renderForm);
routes.post('/teachers/create', teachers.receiveForm);

routes.get('/students', (request, response) => {
  return response.render('students/index')
})

module.exports = routes
