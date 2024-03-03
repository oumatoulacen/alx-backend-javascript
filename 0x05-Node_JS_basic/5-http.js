const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const database = process.argv[2];
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        const students = data.split('\n').filter((line) => line !== '');
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
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(response);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
