const fs = require('fs');

async function countStudents(path) {
  if (fs.existsSync(path)) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        }

        const result = data
          .split('\n')
          .map((line) => line.split(','))
          .filter((check, index) => index !== 0 && check.length > 3);

        const newlis = result.map((data) => [data[0], data[3]]);
        const fields = new Set(newlis.map((item) => item[1]));

        const finalresult = {};
        fields.forEach((data) => {
          finalresult[data] = 0;
        });

        newlis.forEach((data) => {
          finalresult[data[1]] += 1;
        });

        console.log(`Number of students: ${result.length}`);
        
        fields.forEach((data) => {
          console.log(`Number of students in ${data}: ${finalresult[data]}. List: ${newlis.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}`);
        });

        resolve({ result, finalresult, newlis });
      });
    });
  }
  throw new Error('Cannot load the database');
}

module.exports = countStudents;
