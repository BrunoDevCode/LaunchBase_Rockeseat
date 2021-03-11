const db = require('../../config/db');
const { date } = require('../lib/utils');

module.exports = {
  all(callback) {
    db.query('SELECT * FROM students ORDER BY name ASC', (err, results) => {
      if (err) throw `Database error ${err}`;

      callback(results.rows);
    });
  },

  create(data, callback) {
    const query = `
      INSERT INTO students(
        avatar_url,
        name,
        email,
        birth_date,
        grade,
        workload
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id
    `;

    const values = [
      data.avatar_url,
      data.name,
      data.email,
      date(data.birth_date).iso,
      data.grade,
      data.workload,
    ];

    db.query(query, values, (err, results) => {
      if (err) throw `Database error ${err}`;

      return callback(results.rows[0]);
    });
  },

  find(id, callback) {
    db.query(`SELECT * FROM students WHERE id = $1`, [id], (err, results) => {
      if (err) throw `Database error ${err}`;

      return callback(results.rows[0]);
    });
  },

  update(data, callback) {
    const query = `
      UPDATE students SET
        avatar_url=($1),
        name=($2),
        birth_date=($3),
        email=($4),
        grade=($5),
        workload=($6)
      WHERE id = $7
    `;

    const values = [
      data.avatar_url,
      data.name,
      date(data.birth_date).iso,
      data.email,
      data.grade,
      data.workload,
      data.id,
    ];

    db.query(query, values, (err, results) => {
      if (err) throw `Database error ${err}`;

      callback();
    });
  },

  delete(id, callback) {
    db.query(`DELETE FROM students WHERE id = $1`, [id], (err, results) => {
      if (err) throw `Database error! ${err}`;

      return callback();
    });
  },
};
