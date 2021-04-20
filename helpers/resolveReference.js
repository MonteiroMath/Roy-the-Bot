function resolveReference(message, command) {
  let { reference } = message;

  return new Promise(function (resolve, reject) {
    if (!reference || command !== "quote") resolve();

    message.channel.messages.fetch(reference.messageID).then((ref) => {
      if (ref.author.username === "Roy The Dragoon") resolve();

      let result = {
        channel: reference.channelID,
        message: reference.messageID,
        author: ref.author.username,
        content: ref.content,
        time: ref.createdTimestamp,
      };

      resolve(result);
    });
  });
}

module.exports = resolveReference;
