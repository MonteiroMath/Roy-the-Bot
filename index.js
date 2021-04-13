const Discord = require("discord.js");
const parseCommand = require("./helpers/parseCommand");
require("dotenv").config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT = new Discord.Client();
const PREFIX = "!roy";

CLIENT.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  let { command, args } = parseCommand(message.content);

  message.reply(args);
});

CLIENT.login(TOKEN);
