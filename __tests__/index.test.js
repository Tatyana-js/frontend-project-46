import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import path, { dirname } from 'node:path';
import gendiff from '../src/index.js';

const filename = fileURLToPath(import.meta.url);
const nameOfDir = dirname(filename);

const getFilePath = (file) => path.join(nameOfDir, '..', '__fixtures__', file);
const getFileContent = (file) => readFileSync(getFilePath(file), 'UTF-8');

test('gendiff format json', () => {
  const file1 = getFilePath('file1.json');
  const file2 = getFilePath('file2.json');
  expect(gendiff(file1, file2)).toEqual(getFileContent('expectJsonResult.txt'));
});

test('gendiff format yml', () => {
  const file1 = getFilePath('file1.yaml');
  const file2 = getFilePath('file2.yaml');
  expect(gendiff(file1, file2)).toEqual(getFileContent('expectJsonResult.txt'));
});
