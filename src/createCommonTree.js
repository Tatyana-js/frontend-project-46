import _ from 'lodash';

const getCommonTree = (data1, data2) => {
  const commonKeys = Object.keys({ ...data1, ...data2 });
  const commonSortedKeys = _.union(_.sortBy(commonKeys));
  const result = commonSortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { key, children: getCommonTree(value1, value2), type: 'nested' };
    }
    if (!Object.hasOwn(data1, key)) {
      return { key, value2, type: 'added' };
    }
    if (!Object.hasOwn(data2, key)) {
      return { key, value1, type: 'deleted' };
    }
    if (!_.isEqual(value1, value2)) {
      return {
        key, value1, value2, type: 'changed',
      };
    }
    return { key, value1, type: 'unchanged' };
  });
  return (result);
};
export default getCommonTree;
