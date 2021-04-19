const dbAdapter = require("../helpers/dbAdapter");
const stripPost = require("../helpers/stripPost");
const formatMessage = require("../helpers/formatMessage");

function oi() {
  let query = `
  SELECT users.username, posts.post_text, posts.post_subject 
  FROM posts INNER JOIN users 
  ON poster_id = user_id
  WHERE users.username LIKE 'Roy'
  ORDER BY RAND()
  LIMIT 1;
`;

  return dbAdapter
    .getData(query)
    .then((result) => stripPost(result[0].post_text))
    .catch((err) => {
      console.log(err);
      return "deu algum pau no sistema eu acho";
    });
}

module.exports = oi;
