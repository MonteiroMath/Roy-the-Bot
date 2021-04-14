const { MessageAttachment } = require("discord.js");

function bandeto() {
  const attachment = new MessageAttachment("./imgs/bandeto.jpeg");

  return attachment;
}

module.exports = bandeto;
