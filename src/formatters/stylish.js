import _ from 'lodash';

const getFormatStr = (tree, depth = 0) => {
  if (_.isObject(tree)) {
    const spaceCount = ' '.repeat(depth * 4);
    const spaceCountForBracket = ' '.repeat((depth - 1) * 4);
    const keys = Object.keys(tree);
    const result = keys.map((key) => `${spaceCount}${key}: ${getFormatStr(tree[key], depth + 1)}`);
    return `{\n${result.join('\n')}\n${spaceCountForBracket}}`;
  }
  return tree;
};

const stylish = (tree) => {
  const iter = (node, depth = 1) => {
    const spaceCountBeforeStr = ' '.repeat(depth * 4 - 2);
    const spaceCountForBracket = ' '.repeat((depth - 1) * 4);
    const result = node.flatMap((item) => {
      if (item.state === 'nested') {
        return `${spaceCountBeforeStr}  ${item.key}: ${iter(item.value, depth + 1)}`;
      }
      if (item.state === 'added') {
        return `${spaceCountBeforeStr}+ ${item.key}: ${getFormatStr(item.value, depth + 1)}`;
      }
      if (item.state === 'deleted') {
        return `${spaceCountBeforeStr}- ${item.key}: ${getFormatStr(item.value, depth + 1)}`;
      }
      if (item.state === 'changed') {
        return [
          `${spaceCountBeforeStr}- ${item.key}: ${getFormatStr(item.value, depth + 1)}`,
          `${spaceCountBeforeStr}+ ${item.key}: ${getFormatStr(item.value1, depth + 1)}`];
      }
      if (item.state === 'unchanged') {
        return `${spaceCountBeforeStr}  ${item.key}: ${getFormatStr(item.value, depth + 1)}`;
      }
      return 'Unknown format';
    });
    return `{\n${result.join('\n')}\n${spaceCountForBracket}}`;
  };
  return iter(tree);
};
export default stylish;
