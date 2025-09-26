// cucumber.js
module.exports = {
  default: `--require-module ts-node/register ` + 
           `--require test/step_definitions/**/*.ts ` + 
           `--format progress `+
           `--parallel 1 `
};
