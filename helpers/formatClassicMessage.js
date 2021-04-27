const { MessageEmbed } = require("discord.js");
const stripPost = require("./stripPost");

function formatMessage(data) {
  let { username, post_text, post_time } = data;

  let strippedPost = stripPost(post_text);

  const embed = new MessageEmbed()
    .setTitle("Chat EEEEEEEEEEEE")
    .setAuthor(username)
    .setDescription(strippedPost)
    .setFooter(post_time);

  return embed;
}

module.exports = formatMessage;
