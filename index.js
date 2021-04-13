const Discord = require("discord.js");
const parseCommand = require("./helpers/parseCommand");
const COMMANDS = require("./commands/commands");
require("dotenv").config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT = new Discord.Client();
const PREFIX = "!roy";

CLIENT.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  let { command, args } = parseCommand(message.content);

  if (!COMMANDS.hasOwnProperty(command))
    return message.reply("Nao sei o que fazer com esse comando");

  let response = COMMANDS[command](args);

  message.reply(response);
});

CLIENT.login(TOKEN);
