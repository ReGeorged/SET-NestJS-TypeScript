const args = [
  '--require ./features/support/**/*.ts',
  '--require ./features/step_definitions/**/*.ts',
  './features/**/*.feature',
  '--format progress',
  `--parallel 1`
].join(' ');

module.exports = { default: args };

