const { MessageAttachment } = require("discord.js");

function desbandeto() {
  const attachment = new MessageAttachment("./imgs/desbandeto.jpg");

  return Promise.resolve(attachment);
}

module.exports = desbandeto;
