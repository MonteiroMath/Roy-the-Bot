const dbAdapter = require("../helpers/dbAdapter");
const formatMessage = require("../helpers/formatMessage");
const mysql = require("mysql");

const DB = "forum";

function post(args) {
  let entriesQuery, query, autor;

  if (!args[0]) entriesQuery = `SELECT count(*) FROM posts`;
  else if (args[0] === "main") {
    entriesQuery = `
    SELECT count(*) 
    FROM posts 
    WHERE posts.post_subject LIKE "%Chat EEEEEEEEEEEE";
  `;
  } else {
    autor = mysql.escape(`%${args[0]}%`);
    entriesQuery = `SELECT count(*) 
                    FROM posts INNER JOIN users 
                    ON poster_id = user_id
                    WHERE users.username LIKE ${autor}`;
  }

  return dbAdapter.executeQuery(DB, entriesQuery).then((result) => {
    entries = result[0]["count(*)"] - 1;

    let randomPick = Math.floor(Math.random() * entries);

    if (!args[0]) {
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
  });
}

module.exports = post;
