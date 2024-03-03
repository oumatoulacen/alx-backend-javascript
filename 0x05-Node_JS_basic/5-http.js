const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('This is the list of our students\n');
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

      res.write(`Number of students: ${count}\n`);

      for (const field in fields) {
        if (fields[field]) {
          res.write(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`);
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
