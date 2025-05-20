const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;
const databasePath = process.argv[2];

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');

  let response = 'This is the list of our students';

  if (!databasePath) {
    res.status(500).send('Cannot load the database');
    return;
  }

  try {
    const fields = await countStudents(databasePath);
    let total = 0;
    for (const field in fields) {
      total += fields[field].length;
    }

    response += `\nNumber of students: ${total}`;
    for (const field in fields) {
      const list = fields[field].join(', ');
      response += `\nNumber of students in ${field}: ${fields[field].length}. List: ${list}`;
    }

    res.send(response);
  } catch (err) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(PORT);

module.exports = app;
