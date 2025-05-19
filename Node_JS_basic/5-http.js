const http = require('http');
const countStudents = require('./3-read_file_async');

const DB_PATH = process.argv[2];

const app = http.createServer((req, res) => {
  const { url } = req;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    countStudents(DB_PATH)
      .then(() => {
        // The countStudents function already logs to stdout
        // We need to capture output for HTTP response — so let’s recreate the logic here
        const fs = require('fs');
        fs.readFile(DB_PATH, 'utf8', (err, data) => {
          if (err) {
            res.end('Cannot load the database');
            return;
          }

          const lines = data.split('\n').filter((line) => line.trim() !== '');
          const students = lines.slice(1);

          const fields = {};
          for (const line of students) {
            const [firstName, , , field] = line.split(',');
            if (field) {
              if (!fields[field]) {
                fields[field] = [];
              }
              fields[field].push(firstName);
            }
          }

          let response = 'This is the list of our students\n';
          response += `Number of students: ${students.length}\n`;

          for (const [field, names] of Object.entries(fields)) {
            response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
          }

          res.end(response.trim()); // Trim trailing newline
        });
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);
module.exports = app;
