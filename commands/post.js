const dbAdapter = require("../helpers/dbAdapter");
const formatMessage = require("../helpers/formatMessage");
const mysql = require("mysql");

const DB = "forum";

const NUM_POSTS = {
  total: 331635,
  main: 206068,
};

function post(args) {
  if (!args[0]) {
    return getRandomPost();
  } else if (args[0] === "main") {
    return getMainTopicPost();
  } else {
    return getUserPost(args[0]);
  }
}

function getRandomPost() {
  const totalPosts = NUM_POSTS["total"];
  const randomPick = randomize(totalPosts);

  const query = `
      SELECT users.username, posts.post_text, posts.post_subject, posts.post_time 
      FROM posts INNER JOIN users 
      ON poster_id = user_id
      LIMIT 1 OFFSET ${randomPick};`;



  return getPost(query);
}

function getMainTopicPost() {
  const MAIN_ID = 2;
  const totalPosts = NUM_POSTS["main"];
  const randomPick = randomize(totalPosts);

  const query = `
  SELECT users.username, posts.post_text, posts.post_subject, posts.post_time 
  FROM posts INNER JOIN users 
  ON poster_id = user_id
  WHERE posts.topic_id = ${MAIN_ID}
  LIMIT ${randomPick}, 1;`;

  return getPost(query);
}

function getUserPost(username) {
  return getTotalPosts(username)
    .then((totalPosts) => randomize(totalPosts))
    .then((randomPick) => {
      const query = `
      SELECT users.username, posts.post_text, posts.post_subject, posts.post_time 
      FROM posts INNER JOIN users 
      ON poster_id = user_id
      WHERE users.username LIKE %${username}%
      LIMIT ${randomPick}, 1;`;

      return getPost(query);
    });
}

function getTotalPosts(author) {
  const autor = mysql.escape(`%${author}%`);
  const query = `SELECT total_posts 
                  FROM users_posts_total
                  WHERE username LIKE ${autor}`;

  return dbAdapter.executeQuery(DB, query).then((result) => result[0] - 1);
}

function getPost(query) {
  return dbAdapter
    .executeQuery(DB, query)
    .then((result) => {
      if (result.length === 0) {
        return "nao sei quem e esse cara ai nao";
      }

      console.log(result);
      return formatMessage(result[0]);
    })
    .catch((err) => {
      console.log(err);
      const attachment = new MessageAttachment("./imgs/error.gif");
      return attachment;
    });
}

function randomize(totalPosts) {
  return Math.floor(Math.random() * totalPosts);
}

module.exports = post;
