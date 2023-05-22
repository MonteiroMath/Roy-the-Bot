const mysql = require("mysql");
const { MessageAttachment } = require("discord.js");
const dbAdapter = require("../helpers/dbAdapter");
const formatClassic = require("../helpers/formatClassic");
const DB = "classic";

function classic(args) {
  return args[0] ? getUserPost(args[0]) : getRandomPost();
}

function getRandomPost() {
  const TOTAL_POSTS = 256612;
  const randomPick = Math.floor(Math.random() * TOTAL_POSTS);

  const query = `
      SELECT username, post_text, post_time 
      FROM posts 
      LIMIT ${randomPick}, 1;
    `;

  return getPost(query);
}

function getUserPost(username) {
  const author = mysql.escape(`%${username}%`);

  return getTotalPosts(author)
    .then((total_posts) => {
      return Math.floor(Math.random() * total_posts);
    })
    .then((randomPick) => {
      if (isNaN(randomPick)) {
        return "Não conheco esse cara ai nao";
      }

      const query = `
      SELECT username, post_text, post_time 
      FROM posts 
      WHERE username LIKE ${author}
      LIMIT ${randomPick}, 1;
    `;

      return getPost(query);
    });
}

function getTotalPosts(author) {
  const query = `SELECT total_posts 
                  FROM user_posts_num
                  WHERE username LIKE ${author}`;

  return dbAdapter.executeQuery(DB, query).then((result) => {
    if (result.length == 0) {
      return NaN;
    }

    return result[0].total_posts - 1;
  });
}

function getPost(query) {
  return dbAdapter
    .executeQuery(DB, query)
    .then((result) => {
      if (result.length === 0) {
        return "nao sei quem e esse cara ai nao";
      }

      return formatClassic(result[0]);
    })
    .catch((err) => {
      console.log(err);
      const attachment = new MessageAttachment("./imgs/error.gif");
      return attachment;
    });
}
module.exports = classic;
