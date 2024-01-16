import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';

export const getFilePath = (file) => {
    const filePath = path.resolve(process.cwd(), '../__fixtures__', file);
    return filePath;
};
getFilePath();

export const getFileContent = (filePath) => {
const dataFale = fs.readFileSync(filePath, 'UTF-8');
return dataFale;
};
getFileContent();

const getFileType = (filePath) => {
const format = path.extname(filePath).slice(1);
return format;
};
getFileType();

const parse = (dataFale, format) => {
  if (format === 'json') {
    return JSON.parse(dataFale);
  } 
};
export default parse;
