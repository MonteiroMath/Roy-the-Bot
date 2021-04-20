const { MessageEmbed } = require("discord.js");

function formatQuote(data) {
  let { author, content, time } = data;

  const embed = new MessageEmbed()
    .setAuthor(author)
    .setDescription(content)
    .setTimestamp(time);

  return embed;
}

module.exports = formatQuote;
