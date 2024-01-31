import _ from 'lodash';

const createStr = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : String(value);
};

const plain = (tree) => {
  const iter = (node, path = '') => {
    const result = node.flatMap((item) => {
      const currentPath = `${path}${item.key}`;
      if (item.state === 'nested') {
        return iter(item.value, `${currentPath}.`);
      }
      if (item.state === 'added') {
        return `Property '${currentPath}' was added with value: ${createStr(item.value)}`;
      }
      if (item.state === 'deleted') {
        return `Property '${currentPath}' was removed`;
      }
      if (item.state === 'changed') {
        return `Property '${currentPath}' was updated. From ${createStr(item.value)} to ${createStr(item.value2)}`;
      }
      if (item.state === 'unchanged') {
        return [];
      }
      return 'Unknown format';
    });
    return `${result.join('\n')}`;
  };
  return iter(tree);
};
export default plain;
