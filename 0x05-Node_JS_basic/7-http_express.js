const express = require('express');
const { argv } = require('process');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!\n');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  const stream = fs.createReadStream(argv[2], 'utf8');

  stream.on('data', (data) => {
	const lines = data.split('\n').filter(Boolean);
	const result = lines.map((line) => line.split(','));

    result.shift();
    const newis = [];
    result.forEach((data) => newis.push([data[0], data[3]]));
    const fields = new Set();
    newis.forEach((item) => fields.add(item[1]));
    const final = {};
    fields.forEach((data) => { (final[data] = 0); });
    newis.forEach((data) => { (final[data[1]] += 1); });

    // Append to the response
    res.write(`Number of students: ${result.length}\n`);
    Object.keys(final).forEach((data, index) => {
	const list = newis.filter((n) => n[1] === data).map((n) => n[0]).join(', ');
    	res.write(`Number of students in ${data}: ${final[data]}. List: ${list}`);
    	if (index < Object.keys(final).length - 1) {
		res.write('\n');
    	}
    });
  });

  stream.on('end', () => {
    // Close the response after all data has been sent
    res.end();
  });

  stream.on('error', (err) => {
    // Handle errors
    res.send(`Cannot load the database: ${err.message}`);
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
