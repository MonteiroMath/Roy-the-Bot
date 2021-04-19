const Discord = require("discord.js");

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

  COMMANDS.respond(message);
});

CLIENT.login(TOKEN);
