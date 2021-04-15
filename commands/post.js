const dbAdapter = require("../helpers/dbAdapter");
const formatMessage = require("../helpers/formatMessage");

function post(args) {
  let query, message;

  return dbAdapter
    .getConnection()
    .then(() => {
      if (!args[0]) {
        //query for random post
        query = `
                SELECT users.username, posts.post_text, posts.post_subject 
                FROM posts INNER JOIN users 
                ON poster_id = user_id
                ORDER BY RAND()
                LIMIT 1;
              `;
      } else if (args[0] === "main") {
        //query for post from main topic
      } else {
        //query for a random post from an author
      }

      return dbAdapter.getData(query);
    })
    .then((result) => {
      message = formatMessage(result[0]);

      return dbAdapter.endConnection();
    })
    .then(() => message)
    .catch((err) => {
      console.log(err);
    });
}

module.exports = post;
