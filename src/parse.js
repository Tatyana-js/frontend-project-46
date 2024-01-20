const parse = (dataFale, format) => {
  if (format === 'json') {
    return JSON.parse(dataFale);
  }
  return parse;
};
export default parse;
