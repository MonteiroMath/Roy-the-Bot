const Discord = require("discord.js");
const parseCommand = require("./helpers/parseCommand");

const COMMANDS = require("./commands/commands");
require("dotenv").config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT = new Discord.Client();
const PREFIX = "!roy";
const CHANNEL = "foro";

CLIENT.on("message", function (message) {
  if (message.author.bot) return;
  if (message.channel.name !== CHANNEL) return;
  if (!message.content.startsWith(PREFIX)) return;

  let { command, args } = parseCommand(message.content);

  if (!command) return message.channel.send(COMMANDS.help());

  if (!COMMANDS.hasOwnProperty(command))
    return message.channel.send("Nao sei o que fazer com esse comando");

  COMMANDS[command](args).then((result) => message.channel.send(result));
});

CLIENT.login(TOKEN);
