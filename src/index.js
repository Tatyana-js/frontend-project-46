import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';
import _ from 'lodash';
import parse from './parse.js';

export const getFilePath = (file) => {
  const filePath = path.resolve(process.cwd(), './__fixtures__', file);
  return filePath;
};

export const getFileContent = (file) => {
  const dataFale = fs.readFileSync(getFilePath(file), 'UTF-8');
  return dataFale;
};

const getFormat = (filePath) => {
  const format = path.extname(filePath).slice(1);
  return format;
};

const gendiff = (filepath1, filepath2) => {
  const data1 = parse(getFileContent(filepath1), getFormat(filepath1));
  const data2 = parse(getFileContent(filepath2), getFormat(filepath2));

  const commonKeys = Object.keys({ ...data1, ...data2 }).sort();
  const result = commonKeys.map((key) => {
    if (_.has(data1, key) && _.has(data2, key) && (data1[key] !== data2[key])) {
      return `- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}`;
    }
    if (_.has(data1, key) && _.has(data2, key)) {
      return `  ${key}: ${data1[key]}`;
    }
    if (_.has(data1, key) && !_.has(data2, key)) {
      return `- ${key}: ${data1[key]}`;
    }
    return `+ ${key}: ${data2[key]}`;
  });
  return result.join('\n');
};

export default gendiff;
