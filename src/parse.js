import yaml from 'js-yaml';

const parser = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

const parse = (dataFale, format) => {
  try {
    return parser[format](dataFale);
  } catch (err) {
    return 'Unknown format';
  }
};

export default parse;
