import yaml from 'js-yaml';

const parse = (dataFale, format) => (format === 'json' ? JSON.parse(dataFale) : yaml.load(dataFale));
export default parse;
