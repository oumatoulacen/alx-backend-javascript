const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2];
  fs.readFile(database, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('This is the list of our students\nCannot load the database');
    } else {
      const students = data.split('\n').filter((line) => line !== '');
      // Remove the first line (header)
      students.shift();
      const numStudents = students.length;
      const fields = {};
      students.forEach((student) => {
        const field = student.split(',')[3];
        if (!fields[field]) fields[field] = [];
        fields[field].push(student.split(',')[0]);
      });

      let response = `This is the list of our students\nNumber of students: ${numStudents}`;
      for (const field in fields) {
        if (field && fields[field]) {
          response += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
        }
      }
      res.status(200).send(response);
    }
  });
});

app.listen(1245);

module.exports = app;
