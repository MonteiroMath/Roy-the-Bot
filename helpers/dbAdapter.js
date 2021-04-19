const mysql = require("mysql");
require("dotenv").config();

function getData(query) {
  let con = mysql.createConnection({
    host: "localhost",
    user: "roythebot",
    password: process.env.PASSWORD,
    database: "forum",
  });

  return new Promise(function (resolve, reject) {
    con.connect(function (err) {
      if (err) {
        reject(err.stack);
      }

      console.log("connected as id " + con.threadId);

      con.query(query, function (err, results, fields) {
        if (err) reject(err);

        con.end(function (err) {
          if (err) {
            reject(err);
          }

          console.log("Disconnected from id" + con.threadId);
        });

        resolve(results);
      });
    });
  });
}

module.exports = { getData };
