const express = require('express');

const app = express();
const fs = require('fs').promises;

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((db) => {
        let data;
        const students = db.split('\n').filter((line) => line.trim() !== '');
        data = `Number of students: ${students.length - 1}`;
        const fields = {};
        students.slice(1).forEach((student) => {
          const field = student.split(',')[3];
          const newis = student.split(',')[0];
          if (fields[field]) {
            fields[field].push(newis);
          } else {
            fields[field] = [newis];
          }
        });
        Object.keys(fields).forEach((key) => {
          data = data.concat(`\nNumber of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
        });
        resolve(data);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245, () => {});
module.exports = app;
