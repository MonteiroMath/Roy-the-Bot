const oi = require("./oi.js");
const help = require("./help");
const bandeto = require("./bandeto");
const desbandeto = require("./desbandeto");
const post = require("./post");

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
  bandeto,
  desbandeto,
  post,
};

module.exports = COMMANDS;
