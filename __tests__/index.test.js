import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { __dirname } from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const getFilePath = (file) => path.join(__dirname(__filename), '..', '__fixtures__', file);

test('gendiff', () => {
  expect(gendiff('file1.json', 'file2.json')).toEqual(readFileSync(getFilePath('expectJsonResult.txt'), 'UTF-8'));
});
