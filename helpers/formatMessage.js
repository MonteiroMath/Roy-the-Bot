const { MessageEmbed } = require("discord.js");

function formatMessage(data) {
  let { username, post_subject, post_text } = data;

  let strippedPost = post_text.replace(/(<([^>]+)>)/gi, "");

  const embed = new MessageEmbed()
    .setTitle(`${post_subject.replace("Re: ", "")}`)
    .setAuthor(username)
    .setDescription(strippedPost);

  return embed;
}

module.exports = formatMessage;
