// full_server/utils.js
import { readFile } from 'fs';

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const result = {};
    data.split('\n').forEach((line) => {
      const [, , , field] = line.split(',');
      if (field && field.trim() !== '') {
        if (!result[field]) {
          result[field] = [];
        }
        result[field].push(line.split(',')[0]);
      }
    });
    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export { readDatabase };
