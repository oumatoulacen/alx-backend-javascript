const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    try {
      const data = await countStudents(process.argv[2]);
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${data.count}\n`);

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
