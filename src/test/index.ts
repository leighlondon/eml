import * as testRunner from "vscode/lib/testrunner";

// mocha configuration for the test runner
testRunner.configure({
  ui: "bdd", // uses the 'bdd' ui for mocha
  useColors: true, // colored output from test results
  reporter: "spec" // use the 'spec' reporter
});

module.exports = testRunner;
