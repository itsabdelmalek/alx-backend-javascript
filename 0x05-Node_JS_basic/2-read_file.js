/* eslint */
const fs = require('fs');

const countStudents = (path) => {
    try {
        let data = fs.readFileSync(path, 'utf8').toString().split('\n');
        data = data.slice(1, data.length - 1);
        const fieldCounts = {};
        for (const headrs of data) {
            const student = headrs.split(',');
            if(!fieldCounts[student[3]]) fieldCounts[student[3]] = [];
            fieldCounts[student[3]].push(student[0]);
        }
        for (const subject in fieldCounts) {
            if (subject) console.log(`Number of students in ${subject}: ${fieldCounts[subject].length}. List: ${fieldCounts[subject].join(', ')}`);
        }

    }catch (error) {
        throw new Error ('Cannot load the database');
    }
};
module.exports = countStudents;
