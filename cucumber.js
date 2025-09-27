const args = [
  'features/**/*.feature',
  '--require-module ts-node/register',
  '--require features/step_definitions/**/*.ts',
  '--require features/support/**/*.ts',
  '--format progress',
  `--parallel 1`
].join(' ');

module.exports = { default: args };

