const Discord = require("discord.js");
const parseCommand = require("./helpers/parseCommand");
const resolveReference = require("./helpers/resolveReference");
const COMMANDS = require("./commands/commands");
require("dotenv").config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT = new Discord.Client();
const PREFIX = "!roy";
const CHANNEL = "foro";
const CMD_EXCEPTIONS = ["quote", "oi"];
const NSFW = "nsfw";

CLIENT.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  let { command, args } = parseCommand(message.content);

  if (!command) return message.channel.send(COMMANDS.help());
  if (!COMMANDS.hasOwnProperty(command))
    return message.channel.send("Nao sei o que fazer com esse comando");

  if (message.channel.name !== CHANNEL && !CMD_EXCEPTIONS.includes(command))
    return;
  if (message.channel.name === NSFW) return;

  resolveReference(message, command)
    .then((ref) => COMMANDS[command](args, ref))
    .then((result) => message.channel.send(result));
});

CLIENT.login(TOKEN);
