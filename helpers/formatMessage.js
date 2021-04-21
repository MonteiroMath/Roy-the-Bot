const { MessageEmbed } = require("discord.js");
const stripPost = require("./stripPost");

function formatMessage(data) {
  let { username, post_subject, post_text, post_time } = data;

  console.log(post_time);

  console.log(new Date(post_time));

  let strippedPost = stripPost(post_text);

  const embed = new MessageEmbed()
    .setTitle(`${post_subject.replace("Re: ", "")}`)
    .setAuthor(username)
    .setDescription(strippedPost)
    .setTimestamp(post_time * 1000);

  return embed;
}

module.exports = formatMessage;
