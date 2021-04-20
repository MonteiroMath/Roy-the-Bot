const dbAdapter = require("../helpers/dbAdapter");
const formatMessage = require("../helpers/formatMessage");
const mysql = require("mysql");

function quote(args, ref) {
  let query;

  if (!ref) {
    //todo fetch a quote and return

    query = `
    SELECT author, content, time 
    FROM quotes
    ORDER BY RAND()
    LIMIT 1;
  `;

    return dbAdapter
      .getData("quotes", query)
      .then((result) => formatMessage(result[0]))
      .catch((err) => {
        console.log(err);
        return "deu algum pau no sistema eu acho";
      });
  }

  // query = `
  // INSERT INTO quotes (channel, message, author, content, time)
  // VALUES ${ref.channel, ref.message, ref.author, ref.content, ref.time};
  // `
  //todo save quote to db
}

module.exports = quote;
