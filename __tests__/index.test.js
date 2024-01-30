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
  const file1 = getFilePath('file3.json');
  const file2 = getFilePath('file4.json');
  expect(gendiff(file1, file2)).toEqual(getFileContent('expectResult.txt'));
});

test('gendiff format yml', () => {
  const file1 = getFilePath('file3.yaml');
  const file2 = getFilePath('file4.yaml');
  expect(gendiff(file1, file2)).toEqual(getFileContent('expectResult.txt'));
});
