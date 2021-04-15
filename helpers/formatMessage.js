function formatMessage(data) {
  let { username, post_subject, post_text } = data;

  let result = `
  Topico: ${post_subject.replace("Re: ", "")}
  Flooder: ${username}
  Post: ${post_text}
  `;

  return result;
}

module.exports = formatMessage;
