const fs = require('fs');
const data = require('./db.json');
const { age } = require('./utils');

exports.receiveForm = (req, res) => {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == '') return res.send('Please fill all fields');
  }

  let { avatar_url, name, birth, degree, typeOfClass, works } = req.body;

  const id = Number(data.teachers.length + 1);

  data.teachers.push({
    id,
    avatar_url,
    birth,
    name,
    degree,
    typeOfClass,
    works,
    created_at: Date.now(),
  });

  // Usar arrays para preços estilos o works

  fs.writeFile('db.json', JSON.stringify(data, null, 2), (error) => {
    if (error) return res.send('Error in write file');

    return res.redirect('/teachers');
  });
};

exports.show = (req, res) => {
  const { id } = req.params;

  const foundTeacher = data.teachers.find((teacher) => {
    return teacher.id == id;
  });

  if (!foundTeacher) return res.send('Instructor not found');

  const teacher = {
    ...foundTeacher,
    works: foundTeacher.works.split(','),
    age: age(foundTeacher.birth),
    created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at),
  };

  return res.render('teachers/show', { teacher });
};

exports.edit = (req, res) => {};
