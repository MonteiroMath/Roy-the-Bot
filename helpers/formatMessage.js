const { MessageEmbed } = require("discord.js");

function formatMessage(data) {
  let { username, post_subject, post_text } = data;

  const embed = new MessageEmbed()
    .setTitle(`${post_subject.replace("Re: ", "")}`)
    .setAuthor(username)
    .setDescription(post_text);

  return embed;
}

module.exports = formatMessage;
