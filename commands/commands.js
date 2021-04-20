const oi = require("./oi.js");
const help = require("./help");
const bandeto = require("./bandeto");
const desbandeto = require("./desbandeto");
const post = require("./post");
const classic = require("./classic");



const COMMANDS = {
  oi,
  help,
  bandeto,
  desbandeto,
  post,
  classic,
  quote: (args, ref) => {
    console.log(ref);
    return "quote command";
  },
};

module.exports = COMMANDS;
