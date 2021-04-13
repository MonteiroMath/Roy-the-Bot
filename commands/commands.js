const oi = require("./oi.js");

function test(args) {
  console.log(args);

  return "test";
}

function testWithArgs(args) {
  console.log(args);
  return args;
}

const COMMANDS = {
  oi,
  test,
  testWithArgs,
};

module.exports = COMMANDS;
