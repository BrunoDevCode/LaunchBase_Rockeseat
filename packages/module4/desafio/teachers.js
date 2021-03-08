const fs = require('fs');
const data = require('./db.json');
const { age, date } = require('./utils');

exports.create = (req, res) => {
  const keys = Object.keys(req.body);

  console.log(req.body);

  for (key of keys) {
    if (req.body[key] == '') return res.send('Please fill all fields');
  }

  let { avatar_url, name, birth, degree, typeOfClass, works } = req.body;

  const id = Number(data.teachers.length + 1);

  data.teachers.push({
    id,
    avatar_url,
    birth: Date.parse(birth),
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

  if (!foundTeacher) return res.send('Teacher not found');

  const teacher = {
    ...foundTeacher,
    works: foundTeacher.works.split(','),
    age: age(foundTeacher.birth),
    created_at: new Intl.DateTimeFormat('pt-BR').format(
      foundTeacher.created_at
    ),
  };

  return res.render('teachers/show', { teacher });
};

exports.edit = (req, res) => {
  const { id } = req.params;

  const foundTeacher = data.teachers.find((teacher) => {
    return teacher.id == id;
  });

  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth),
  };

  console.log(teacher);

  if (!foundTeacher) return res.send('Teacher not found');

  return res.render('teachers/edit', { teacher });
};

exports.put = (req, res) => {
  const { id } = req.body;

  let index = 0;

  const foundTeacher = data.teachers.find((teacher, foundIndex) => {
    if (id == teacher.id) {
      index = foundIndex;
      return true;
    }
  });

  if(!foundTeacher) return res.send('Teacher not found');

  const teacher = {
    ...foundTeacher,
    ...req.body,
    birth: Date.parse(req.body.birth),
  }

  data.teachers[index] = teacher;

  fs.writeFile('db.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Write error !');

    return res.redirect(`/teachers/${id}`);
  });
}

exports.delete = (req, res) => {
  const { id } = req.body;

  const remainingTeachers = data.teachers.filter((teacher) => {
    return teacher.id != id
  });

  data.teachers = remainingTeachers;

  fs.writeFile('db.json', JSON.stringify(data, null, 2), err => {
    if (err) return res.json('Write error !');

    return res.redirect('/teachers');
  })
}