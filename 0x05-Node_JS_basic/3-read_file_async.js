const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.length > 0);
        lines.shift();
        console.log(`Number of students: ${lines.length}`);
        const fields = {};
        lines.forEach((line) => {
          const student = line.split(',');
          if (!fields[student[3]]) fields[student[3]] = [];
          fields[student[3]].push(student[0]);
        });
        for (const field in fields) {
          if (field && fields[field]) {
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          }
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
