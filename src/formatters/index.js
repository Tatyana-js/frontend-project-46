import stylish from './stylish.js';
import plain from './plain.js';

const getFormatFile = (tree, format) => {
  if (format === 'json') {
    return JSON.stringify(tree, null, ' ');
  }
  if (format === 'stylish') {
    return stylish(tree);
  }
  return plain(tree);
};

export default getFormatFile;
