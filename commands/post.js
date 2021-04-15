const dbAdapter = require("../helpers/dbAdapter");

function post(args) {
  let query, message;

  return dbAdapter
    .getConnection()
    .then(() => {
      if (!args[0]) {
        //query for random post
        query = `
                SELECT * FROM posts
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
      message = result[0].post_text;

      return dbAdapter.endConnection();
    })
    .then(() => message)
    .catch((err) => {
      console.log(err);
    });
}

module.exports = post;
