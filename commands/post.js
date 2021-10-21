const dbAdapter = require("../helpers/dbAdapter");
const formatMessage = require("../helpers/formatMessage");
const mysql = require("mysql");

const DB = "forum";
const ENTRIES = 331635;

function post(args) {
  let query;

  let randomPick = Math.floor(Math.random() * ENTRIES);

  if (!args[0]) {
    //query for random post
    query = `
            SELECT users.username, posts.post_text, posts.post_subject, posts.post_time 
            FROM posts INNER JOIN users 
            ON poster_id = user_id
            LIMIT ${randomPick}, 1;
          `;
  } else if (args[0] === "main") {
    query = `
            SELECT users.username, posts.post_text, posts.post_subject, posts.post_time 
            FROM posts INNER JOIN users 
            ON poster_id = user_id
            WHERE posts.post_subject LIKE "%Chat EEEEEEEEEEEE"
            LIMIT ${randomPick}, 1;
          `;
  } else {
    let autor = mysql.escape(`%${args[0]}%`);

    query = `
            SELECT users.username, posts.post_text, posts.post_subject, posts.post_time 
            FROM posts INNER JOIN users 
            ON poster_id = user_id
            WHERE users.username LIKE ${autor}
            LIMIT ${randomPick}, 1;
          `;
  }

  return dbAdapter
    .executeQuery(DB, query)
    .then((result) => {
      if (result.length === 0) {
        return "nao sei quem e esse cara ai nao";
      }

      return formatMessage(result[0]);
    })
    .catch((err) => {
      console.log(err);
      return "deu algum pau no sistema eu acho";
    });
}

module.exports = post;
