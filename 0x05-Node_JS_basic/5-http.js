const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    try {
      const { count, students } = await countStudents(process.argv[2]);
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${count}\n`);
      for (const field in students) {
        if (field) {
          res.write(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`);
        }
      }
      res.end();
    } catch (err) {
      res.end(err.message);
    }
  }
});

app.listen(1245);

module.exports = app;
