const http = require('http');
const fs = require('fs');
const { argv } = require('process');

function countStudents(path, stream) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(path)) {
      const data = fs.readFileSync(path, 'utf8');
      const result = data
        .split('\n')
        .map((line, index) => (index === 0 ? [] : line.split(',')))
        .filter((check) => check.length > 3);

      const newlis = result.map((data) => [data[0], data[3]]);
      const fields = [...new Set(newlis.map((item) => item[1]))];

      const counts = newlis.reduce((acc, data) => {
        acc[data[1]] = (acc[data[1]] || 0) + 1;
        return acc;
      }, {});

      stream.write(`Number of students: ${result.length}\n`);
      fields.forEach((field, index) => {
        const list = newlis.filter((n) => n[1] === field).map((n) => n[0]).join(', ');
        stream.write(`Number of students in ${field}: ${counts[field]}. List: ${list}`);
	if (index < fields.length - 1) {
		stream.write('\n');
	}
      });

      resolve();
    } else {
      reject(new Error('Cannot load the database'));
    }
  });
}

const hostname = 'localhost';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      await countStudents(argv[2], res);
      res.end();
    } catch (err) {
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.write('404 Not Found\n');
    res.end();
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
