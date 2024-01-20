import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import path, { dirname } from 'node:path';
import gendiff from '../src/index';

const filename = fileURLToPath(import.meta.url);
const nameOfDir = dirname(filename);

const getFilePath = (file) => path.join(nameOfDir, '..', '__fixtures__', file);
const getFileContent = (file) => readFileSync(getFilePath(file), 'UTF-8');

test('gendiff', () => {
  const file1 = getFilePath('file1.json');
  const file2 = getFilePath('file2.json');
  expect(gendiff(file1, file2)).toEqual(getFileContent('expectJsonResult.txt'));
});
