const { MessageEmbed } = require("discord.js");
const stripPost = require("./stripClassicPost");
const renderPost = require("./renderPost");

function formatMessage(data) {
  let { username, post_text, post_time } = data;

  return renderPost(data).then(() => {
    const embed = new MessageEmbed()
      .setTitle("Chat EEEEEEEEEEEE")
      .setAuthor(username)
      .attachFiles("./screenshot.png")
      .setImage("attachment://screenshot.png")
      .setFooter(post_time);

    return embed;
  });
}

module.exports = formatMessage;
