const dbAdapter = require("../helpers/dbAdapter");
const formatMessage = require("../helpers/formatMessage");
const mysql = require("mysql");

const DB = "quotes";

function getQuote() {
  let query = `
    SELECT author, content, time 
    FROM quotes
    ORDER BY RAND()
    LIMIT 1;
  `;

  return dbAdapter
    .getData(DB, query)
    .then((result) => formatMessage(result[0]))
    .catch((err) => {
      console.log(err);
      return "deu algum pau no sistema eu acho";
    });
}

function insertQuote(ref) {
  let content = mysql.escape(ref.content);

  let query = `
  INSERT INTO quotes (channel, message, author, content, time)
  VALUES ${(ref.channel, ref.message, ref.author, content, ref.time)};
  `;

  return;
}

function quote(args, ref) {
  if (!ref) {
    return getQuote;
  }

  return insertQuote(ref);
}

module.exports = quote;
