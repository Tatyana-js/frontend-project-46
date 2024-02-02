import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import path, { dirname } from 'node:path';
import gendiff from '../src/index.js';

const filename = fileURLToPath(import.meta.url);
const nameOfDir = dirname(filename);

const getFilePath = (file) => path.join(nameOfDir, '..', '__fixtures__', file);
const getFileContent = (file) => readFileSync(getFilePath(file), 'UTF-8');

test('gendiff format stylish for json and yaml files', () => {
  const file1 = getFilePath('file1.json');
  const file2 = getFilePath('file2.yaml');
  expect(gendiff(file1, file2)).toEqual(getFileContent('expectStylishResult.txt'));
});

test.each([
  [getFilePath('file1.json'), getFilePath('file2.json'), 'json', getFileContent('expectJsonResult.json')],
  [getFilePath('file1.yaml'), getFilePath('file2.yaml'), 'stylish', getFileContent('expectStylishResult.txt')],
  [getFilePath('file1.json'), getFilePath('file2.json'), 'plain', getFileContent('expectPlainResult.txt')],
  [getFilePath('file1.json'), getFilePath('file2.yaml'), 'json', getFileContent('expectJsonResult.json')],
])('gendiff(%#)', (a, b, c, expected) => {
  expect(gendiff(a, b, c)).toEqual(expected);
});
