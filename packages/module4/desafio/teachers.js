const fs = require('fs');

exports.renderForm = (req, res) => {
  return res.render('teachers/create');
}

exports.receiveForm = (req, res) => {
  const keys = Object.keys(req.body);

  for(key of keys) {
    if(req.body[key] == '') return res.send('Please fill all fields');
  }

  fs.writeFile('db.json', JSON.stringify(req.body, null, 2), error => {
    if(error) return res.send('Error in write file');

    return res.redirect('/teachers');
  });
}