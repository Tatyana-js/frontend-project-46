import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';

export const getFilePath = (file) => path.resolve(process.cwd(), '../__fixtures__', file);
getFilePath();

export const getFileContent = (filePath) => fs.readFileSync(filePath, 'UTF-8');
getFileContent();

const parse = (file) => {
  const filePath = getFilePath(file);
  const format = path.extname(filePath).slice(1);
  if (format === 'json') {
    return JSON.parse(getFileContent(filePath));
  } else if (format === 'YML' || ) {
    return 
  }
};
export default parse;
