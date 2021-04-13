function parseCommand(message) {
  commandBody = message.split(" ");

  let [prefix, command, ...args] = commandBody;

  return {
    command,
    args,
  };
}

module.exports = parseCommand;