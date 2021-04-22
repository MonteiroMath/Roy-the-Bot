const dbAdapter = require("../helpers/dbAdapter");
const formatQuote = require("../helpers/formatQuote");
const stripEmojis = require("../helpers/stripEmojis");
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
    .executeQuery(DB, query)
    .then((result) => formatQuote(result[0]))
    .catch((err) => {
      console.log(err);
      return "deu algum pau no sistema eu acho";
    });
}

function insertQuote(ref) {
  let content = stripEmojis(ref.content);

  content = mysql.escape(content);

  let query = `INSERT INTO quotes (channel, message, author, content, time)
  VALUES (${ref.channel}, ${ref.message}, '${ref.author}', ${content}, ${ref.time} )`;

  return dbAdapter
    .executeQuery(DB, query)
    .then((result) => {
      return "Boa vou anotar essa";
    })
    .catch((err) => {
      console.log(err);
      return "deu algum pau no sistema eu acho";
    });
}

function quote(args, ref) {
  if (!ref) {
    return getQuote();
  }

  return insertQuote(ref);
}

module.exports = quote;
