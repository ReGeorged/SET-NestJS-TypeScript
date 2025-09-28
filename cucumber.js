const args = [
  '--require-module ts-node/register',
  '--require ./features/support/**/*.ts',
  '--require ./features/step_definitions/**/*.ts',
  '--format @cucumber/pretty-formatter',
  './features/**/*.feature',
  '--parallel 2',
].join(' ');

module.exports = { default: args };
