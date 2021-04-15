const mysql = require("mysql");
require("dotenv").config();

var connection;

function getConnection() {
  connection = mysql.createConnection({
    host: "localhost",
    user: "roythebot",
    password: process.env.PASSWORD,
    database: "forum",
  });

  return new Promise(function (resolve, reject) {
    connection.connect(function (err) {
      if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }

      console.log("connected as id " + connection.threadId);
      resolve("worked");
    });
  });
}

function getData(query) {
  return new Promise(function (resolve, reject) {
    connection.query(query, function (err, results, fields) {
      if (err) throw err;

      resolve(results);
    });
  });
}

function endConnection() {
  return new Promise(function (resolve, reject) {
    connection.end(function (err) {
      if (err) {
        console.error(err);
        return;
      }

      resolve("Disconnected");
    });
  });
}

module.exports = { getConnection, getData, endConnection };
