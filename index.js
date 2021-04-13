const Discord = require("discord.js");
require("dotenv").config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT = new Discord.Client();

CLIENT.on("message", function (message) {
  if (message.author.bot) return;

  message.reply("Received a message event");
});

CLIENT.login(TOKEN);
