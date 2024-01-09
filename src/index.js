import { Command } from 'commander';

const program = new Command();

const gendiff = () => {
program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'output usage information')

  if(program.help) {
    program.outputHelp();
  }

program.parse();
};
export default gendiff;
