const fs = require('fs');
const data = require('./data.json');
const { age, date } = require('./utils');

exports.index = (req, res) => {
  return res.render('instructors/index', { instructors: data.instructors });
}

exports.show = (req, res) => {
  const { id } = req.params;

  const foundInstructor = data.instructors.find(function (instructor) {
    return instructor.id == id;
  });

  if (!foundInstructor) return res.send('Instructor not found');

  const instructor = {
    ...foundInstructor,
    age: age(foundInstructor.birth),
    services: foundInstructor.services.split(','),
    created_at: new Intl.DateTimeFormat('pt-BR').format(
      foundInstructor.created_at
    ),
  };

  return res.render('instructors/show', { instructor });
};

// Create
// Nome que quiser
exports.post = (req, res) => {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == '') return res.send('Please fill all fields');
  }

  let { avatar_url, birth, name, services, gender } = req.body;

  birth = Date.parse(birth);
  const created_at = Date.now();
  const id = Number(data.instructors.length + 1);

  data.instructors.push({
    id,
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at,
  });

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (error) => {
    if (error) return res.send('Write file error');

    return res.redirect('/instructors');
  });
};

exports.edit = function (req, res) {
  const { id } = req.params;

  const foundInstructor = data.instructors.find(function (instructor) {
    return instructor.id == id;
  });

  if (!foundInstructor) return res.send('Instructor not found');

  const instructor = {
    ...foundInstructor,
    birth: date(foundInstructor.birth),
  };

  return res.render('instructors/edit', { instructor });
};

exports.put = (req, res) => {
  const { id } = req.body;

  let index = 0;

  const foundInstructor = data.instructors.find(function (
    instructor,
    foundIndex
  ) {
    if (id == instructor.id) {
      index = foundIndex;
      return true;
    }
  });

  if (!foundInstructor) return res.send('Instructor not found');

  const instructor = {
    ...foundInstructor,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id),
  };

  data.instructors[index] = instructor;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Write error !');

    return res.redirect(`/instructors/${id}`);
  });
};
