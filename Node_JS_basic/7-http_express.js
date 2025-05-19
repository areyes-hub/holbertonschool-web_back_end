const express = require('express');
const readDatabase = require('./read_file_async');

const app = express();
const PORT = 1245;
const databasePath = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let responseText = 'This is the list of our students\n';

  try {
    const students = await readDatabase(databasePath);
    let total = 0;

    for (const field in students) {
      total += students[field].length;
    }

    responseText += `Number of students: ${total}\n`;

    for (const field in students) {
      const list = students[field].join(', ');
      responseText += `Number of students in ${field}: ${students[field].length}. List: ${list}\n`;
    }

    // Remove final newline
    responseText = responseText.trim();
    res.set('Content-Type', 'text/plain');
    res.send(responseText);
  } catch (err) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(PORT);

module.exports = app;
