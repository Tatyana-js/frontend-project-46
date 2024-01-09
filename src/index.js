import { Command } from 'commander';

const program = new Command();

const gendiff = () => {
program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'output usage information')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2));
  });

  if(program.help) {
    program.outputHelp();
  }

program.parse();
};
export default gendiff;
