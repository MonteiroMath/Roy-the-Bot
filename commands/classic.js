const mysql = require("mysql");
const { MessageAttachment } = require("discord.js");
const dbAdapter = require("../helpers/dbAdapter");
const renderPost = require("../helpers/renderPost");

const DB = "classic";

function classic(args) {
  let query;

  if (!args[0]) {
    //query for random post
    query = `
            SELECT username, post_text, post_time 
            FROM posts 
            ORDER BY RAND()
            LIMIT 1;
          `;
  } else {
    let autor = mysql.escape(`%${args[0]}%`);

    query = `
            SELECT username, post_text, post_time 
            FROM posts 
            WHERE username LIKE ${autor}
            ORDER BY RAND()
            LIMIT 1;
          `;
  }

  return dbAdapter
    .executeQuery(DB, query)
    .then((result) => {
      if (result.length === 0) {
        return "nao sei quem e esse cara ai nao";
      }

      return renderPost(result[0]).then(() => {
        const attachment = new MessageAttachment("./screenshot.png");

        return attachment;
      });
    })
    .catch((err) => {
      console.log(err);
      return "deu algum pau no sistema eu acho";
    });
}

module.exports = classic;
