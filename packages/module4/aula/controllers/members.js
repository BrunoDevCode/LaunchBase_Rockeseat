const fs = require('fs');
const data = require('../data.json');
const { age, date } = require('../utils');

exports.index = (req, res) => {
  return res.render('members/index', { members: data.members });
};

exports.show = (req, res) => {
  const { id } = req.params;

  const foundInstructor = data.members.find(function (member) {
    return member.id == id;
  });

  if (!foundInstructor) return res.send('Instructor not found');

  const member = {
    ...foundInstructor,
    age: age(foundInstructor.birth),
  };

  return res.render('members/show', { member });
};

exports.create = (req, res) => {
  return res.render('members/create');
};

exports.post = (req, res) => {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == '') return res.send('Please fill all fields');
  }

  let { avatar_url, birth, name, services, gender } = req.body;

  birth = Date.parse(birth);
  const created_at = Date.now();
  const id = Number(data.members.length + 1);

  data.members.push({
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

    return res.redirect('/members');
  });
};

exports.edit = function (req, res) {
  const { id } = req.params;

  const foundInstructor = data.members.find(function (member) {
    return member.id == id;
  });

  if (!foundInstructor) return res.send('Instructor not found');

  const member = {
    ...foundInstructor,
    birth: date(foundInstructor.birth),
  };

  return res.render('members/edit', { member });
};

exports.put = (req, res) => {
  const { id } = req.body;

  let index = 0;

  const foundInstructor = data.members.find(function (member, foundIndex) {
    if (id == member.id) {
      index = foundIndex;
      return true;
    }
  });

  if (!foundInstructor) return res.send('Instructor not found');

  const member = {
    ...foundInstructor,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id),
  };

  data.members[index] = member;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Write error !');

    return res.redirect(`/members/${id}`);
  });
};

exports.delete = (req, res) => {
  const { id } = req.body;

  const filteredInstructors = data.members.filter((member) => {
    return member.id != id;
  });

  data.members = filteredInstructors;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Write File !');

    return res.redirect('/members');
  });
};
