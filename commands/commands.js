const oi = require("./oi.js");
const help = require("./help");

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
  help,
  test,
  testWithArgs,
};

module.exports = COMMANDS;
