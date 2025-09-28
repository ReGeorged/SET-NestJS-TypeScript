const args = [
  '--require-module ts-node/register',
  '--require ./features/support/**/*.ts',
  '--require ./features/step_definitions/**/*.ts',
  '--format progress',
  './features/**/*.feature',
  '--parallel 1',
].join(' ');

module.exports = { default: args };
