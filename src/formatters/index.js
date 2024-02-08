import getStylish from './stylish.js';
import getPlain from './plain.js';

const formater = {
  json: JSON.stringify,
  stylish: getStylish,
  plain: getPlain,
};
const getFormatFile = (tree, format) => {
  try {
    return formater[format](tree);
  } catch (err) {
    return 'Unknow format';
  }
};

export default getFormatFile;
