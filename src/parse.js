import yaml from 'js-yaml';

const parse = (dataFale, format) => {
  if (format === 'json') {
    return JSON.parse(dataFale);
  }
  return yaml.load(dataFale);
};
export default parse;
