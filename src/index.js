import { readFileSync } from 'node:fs';
import process from 'node:process';
import path from 'node:path';
import parse from './parse.js';
import getCommonTree from './createCommonTree.js';
import getFormatFile from './formatters/index.js';

export const getFilePath = (file) => {
  const filePath = path.resolve(process.cwd(), '__fixtures__', file);
  return filePath;
};

export const getFileContent = (file) => {
  const dataFale = readFileSync(getFilePath(file), 'UTF-8');
  return dataFale;
};

const getFormat = (filePath) => {
  const format = path.extname(filePath).slice(1);
  return format;
};

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const fileContent1 = getFileContent(filepath1);
  const fileContent2 = getFileContent(filepath2);
  const format1 = getFormat(filepath1);
  const format2 = getFormat(filepath2);
  const data1 = parse(fileContent1, format1);
  const data2 = parse(fileContent2, format2);
  const diff = getCommonTree(data1, data2);
  const formatedFileDiff = getFormatFile(diff, format);
  return formatedFileDiff;
};

export default gendiff;
