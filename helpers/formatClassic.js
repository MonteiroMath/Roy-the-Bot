const { MessageEmbed } = require("discord.js");
const stripPost = require("./stripPost");

function formatClassic(data) {
  const { username, post_text, post_time } = data;

  let strippedPost = stripPost(post_text);

  const embed = new MessageEmbed()
    .setTitle(`Chat EEEEEEEEEEEE`)
    .setAuthor(username)
    .setDescription(strippedPost)
    .setTimestamp(post_time);

  return embed;
}

module.exports = formatClassic;
