const oi = require("./oi.js");
const help = require("./help");
const bandeto = require("./bandeto");
const desbandeto = require("./desbandeto");
const post = require("./post");
const classic = require("./classic");

const parseCommand = require("../helpers/parseCommand");

const COMMANDS = {
  oi,
  help,
  bandeto,
  desbandeto,
  post,
  classic,
};

function respond(message) {
  let { command, args } = parseCommand(message.content);

  if (!command) return message.channel.send(COMMANDS.help());
  if (!COMMANDS.hasOwnProperty(command))
    return message.channel.send("Nao sei o que fazer com esse comando");

  return COMMANDS[command](args).then((result) => message.channel.send(result));
}

module.exports = { respond };
