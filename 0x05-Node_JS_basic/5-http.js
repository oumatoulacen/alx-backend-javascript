const http = require('http');
const fs = require('fs');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    try {
      const data = fs.readFileSync(process.argv[2], 'utf8');
      const lines = data.split('\n').filter((line) => line.length > 0);
      lines.shift();
      const count = lines.length;
      const fields = {};

      lines.forEach((line) => {
        const student = line.split(',');
        if (!fields[student[3]]) fields[student[3]] = [];
        fields[student[3]].push(student[0]);
      });

      res.write('This is the list of our students\n');
      res.write(`Number of students: ${count}\n`);

      for (const field in data.students) {
        if (field && data.students[field]) {
          res.write(`Number of students in ${field}: ${data.students[field].length}. List: ${data.students[field].join(', ')}\n`);
        }
      }
      res.end();
    } catch (error) {
      res.end(error.message);
    }
  }
});

app.listen(1245);

module.exports = app;
