const Student = require('../models/Student');
const { age, date, grade } = require('../lib/utils');

module.exports = {
  index(req, res) {
    Student.all((students) => {
      for (student of students) {
        student.grade = grade(student.grade);
      }

      return res.render('students/index', { students });
    });
  },

  create(req, res) {
    return res.render('students/create');
  },

  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == '') return res.send('Please fill all fields');
    }

    Student.create(req.body, (student) => {
      return res.redirect(`/students/${student.id}`);
    });
  },

  show(req, res) {
    Student.find(req.params.id, (student) => {
      if (!student) return res.send('Student not found!');

      student.grade = grade(student.grade);
      student.age = age(student.birth_date);

      return res.render('students/show', { student });
    });
  },

  edit(req, res) {
    Student.find(req.params.id, (student) => {
      if (!student) return res.send('Student not found!');

      student.birth_date = date(student.birth_date).iso;

      return res.render('students/edit', { student });
    });
  },

  put(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == '') return res.send('Please fill all fields');
    }

    Student.update(req.body, () => {
      return res.redirect(`/students/${req.body.id}`);
    });
  },

  delete(req, res) {
    Student.delete(req.body.id, () => {
      return res.redirect('/students');
    });
  },
};
