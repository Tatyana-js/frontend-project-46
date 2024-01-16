import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';

export const getFilePath = (file) => {
  const filePath = path.resolve(process.cwd(), '../__fixtures__', file);
  return filePath;
};

export const getFileContent = (filePath) => {
  const dataFale = fs.readFileSync(filePath, 'UTF-8');
  return dataFale;
};

// const getFileType = (filePath) => {
//   const format = path.extname(filePath).slice(1);
//   return format;
// };

const gendiff = (filepath1, filepath2) => {
  const filePath1 = getFilePath(filepath1);
  const filePath2 = getFilePath(filepath2);
  const getFileContent1 = getFileContent(filePath1, 'UTF-8');
  const getFileContent2 = getFileContent(filePath2, 'UTF-8');
  console.log(getFileContent1, getFileContent2);
};
export default gendiff;
