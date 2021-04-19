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
  quote: (args, ref) => {
    console.log(ref);
    return "quote command";
  },
};

function respond(message) {
  let { command, args } = parseCommand(message.content);
  let { reference } = message;

  if (!command) return message.channel.send(COMMANDS.help());
  if (!COMMANDS.hasOwnProperty(command))
    return message.channel.send("Nao sei o que fazer com esse comando");

  //todo add errs
  let resolveReference = new Promise(function (resolve, reject) {
    if (!reference || command !== "quote") resolve();

    message.channel.messages.fetch(reference.messageID).then((ref) => {
      let result = {
        author: ref.author.username,
        content: ref.content,
        time: ref.createdTimestamp,
      };
      resolve(result);
    });
  });

  return resolveReference
    .then((ref) => COMMANDS[command](args, ref))
    .then((result) => message.channel.send(result));
}

module.exports = { respond };
