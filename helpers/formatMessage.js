const { MessageEmbed } = require("discord.js");
const stripPost = require("./stripPost");

function formatMessage(data) {
  let { username, post_subject, post_text } = data;

  let strippedPost = stripPost(post_text);

  const embed = new MessageEmbed()
    .setTitle(`${post_subject.replace("Re: ", "")}`)
    .setAuthor(username)
    .setDescription(strippedPost);

  return embed;
}

module.exports = formatMessage;
