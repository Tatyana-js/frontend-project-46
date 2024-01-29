import stylish from './stylish.js';

const getFormatFile = (tree, format) = {
    switch (format) {
        case 'stylish':
            return stylish(tree);
        case 'json':
            return JSON.stringify(tree, null, ' ');
        default: 
            throw new Error ('Unknown format');
    }
};

export default getFormatFile;