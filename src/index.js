import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';
import _ from 'lodash';

export const getFilePath = (file) => {
  const filePath = path.resolve(process.cwd(), './__fixtures__', file);
  return filePath;
};

export const getFileContent = (filePath) => {
  const dataFale = fs.readFileSync(filePath, 'UTF-8');
  return dataFale;
};

const getFileType = (filePath) => {
  const format = path.extname(filePath).slice(1);
  return format;
};

const gendiff = (filepath1, filepath2) => {
    const resultStr = '';
    const data1 = parse(getFilePath(filepath1), getFileContent(filepath1));
    const data2 = parse(getFilePath(filepath2), getFileContent(filepath2));
    const arr1 = Object.keys(data1);
    const arr2 = Object.keys(data2);
        for (const item of arr1) {
          if (_.has(obj2, item)) {
            resultObj[item] = obj1[item] === obj2[item] ? 'unchanged' : 'changed';
          } else if (!_.has(obj2, item)) {
            resultObj[item] = 'deleted';
          }
        } for (const item of arr2) {
          if (!_.has(obj1, item)) {
            resultObj[item] = 'added'; 
          }
        }
        return resultObj;
      };

export default gendiff;
