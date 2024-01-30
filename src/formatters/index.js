import stylish from './stylish.js';
import json from './json.js';

const getFormatFile = (tree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(tree);
    case 'json':
      return json(tree);
    default:
      throw new Error('Unknown format');
  }
};

export default getFormatFile;
