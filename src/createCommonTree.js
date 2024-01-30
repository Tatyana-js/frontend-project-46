import _ from 'lodash';

const getCommonTree = (data1, data2) => {
  const commonKeys = Object.keys({ ...data1, ...data2 }).sort();
  const result = commonKeys.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, value: ((getCommonTree(data1[key], data2[key]))), state: 'nested' };
    }
    if (!Object.hasOwn(data1, key)) {
      return { key, value: data2[key], state: 'added' };
    }
    if (!Object.hasOwn(data2, key)) {
      return { key, value: data1[key], state: 'deleted' };
    }
    if ((data1[key] !== data2[key])) {
      return {
        key, value: data1[key], value2: data2[key], state: 'changed',
      };
    }
    return { key, value: data1[key], state: 'unchanged' };
  });
  return result;
};
export default getCommonTree;
