import _ from 'lodash';

const createStr = (tree) => {
  if (_.Object(tree)) {
    return '[complex value]';
  }
  return typeof tree === 'string' ? `${tree}` : String(tree);
};

const plain = (tree) => {
  const iter = (node, depth = 1) => {
    const result = node.flatMap((item) => {
      if (item.state === 'nested') {
        return `Property '${item.key}' was added with value: ${createStr(item.value, depth + 1)}`;
      }
      if (item.state === 'added') {
        return `Property '${item.key}' was added with value: ${item.value}`;
      }
      if (item.state === 'deleted') {
        return `Property '${item.key}' was removed`;
      }
      if (item.state === 'changed') {
        return `Property '${item.key}' was updated. From ${item.value} to ${item.value2}`;
      }
      if (item.state === 'unchanged') {
        return [];
      }
      return 'Unknown format';
    });
    return `{\n${result.join('\n')}}`;
  };
  return iter(tree);
};
export default plain;
