const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = {};

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line === '') continue;

        const fields = line.split(',');
        const firstName = fields[0];
        const field = fields[fields.length - 1];

        if (!students[field]) {
          students[field] = [];
        }

        students[field].push(firstName);
      }

      resolve(students);
    });
  });
}

module.exports = readDatabase;
