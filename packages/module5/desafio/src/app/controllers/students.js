const Student = require('../models/Student');
const { age, date, grade } = require('../lib/utils');

module.exports = {
  index(req, res) {
    let { filter, page, limit } = req.query;

    page = page || 1;
    limit = limit || 2;
    let offset = limit * (page - 1);

    const params = {
      page,
      limit,
      filter,
      offset,
      callback(students) {
        const pagination = {
          total: Math.ceil(students[0].total / limit),
          page,
        };

        for (student of students) {
          student.grade = grade(student.grade);
        }

        return res.render('students/index', {
          students,
          filter,
          pagination,
        });
      },
    };

    Student.paginate(params);
  },

  create(req, res) {
    Student.teacherSelectOptions((options) => {
      return res.render('students/create', { teacherOptions: options });
    });
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

      Student.teacherSelectOptions((options) => {
        return res.render('students/edit', {
          student,
          teacherOptions: options,
        });
      });
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
