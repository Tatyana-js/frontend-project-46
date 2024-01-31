import stylish from './stylish.js';
import json from './json.js';
import plain from './plain.js';

const getFormatFile = (tree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(tree);
    case 'json':
      return json(tree);
    case 'plain':
      return plain(tree);
    default:
      throw new Error('Unknown format');
  }
};

export default getFormatFile;
