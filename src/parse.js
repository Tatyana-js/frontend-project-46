import yaml from 'js-yaml';

const parse = (dataFale, format) => {
  if (format === 'json') {
    return JSON.parse(dataFale);
  } if (format === 'yml' || 'yaml') {
    return yaml.load(dataFale);
  } return parse;
};
export default parse;
