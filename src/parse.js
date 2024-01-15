import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';

export const getFilePath = (file) => path.resolve(process.cwd(), '../__fixtures__', file);

getFilePath();
const parsing = (file) => {
  const content = fs.readFileSync(getFilePath(file), 'utf8');
  const format = path.extname(getFilePath(file));
  switch (format) {
    case '.json':
      return JSON.parse(content);
    default:
      throw new Error('Unknown format!');
  }
};
export default parsing;
