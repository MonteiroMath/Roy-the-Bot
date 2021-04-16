const mysql = require("mysql");
require("dotenv").config();

//!mudar para dentro do getCOnnection e retornar como resultado? Verificar comportamento com 2 requests rápidos
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
        reject(err.stack);
      }

      console.log("connected as id " + connection.threadId);
      resolve("worked");
    });
  });
}

function getData(query) {
  return new Promise(function (resolve, reject) {
    connection.query(query, function (err, results, fields) {
      if (err) reject(err);

      resolve(results);
    });
  });
}

function endConnection() {
  return new Promise(function (resolve, reject) {
    connection.end(function (err) {
      if (err) {
        reject(err);
      }

      console.log("Disconnected from id" + connection.threadId);
      resolve("Disconnected");
    });
  });
}

module.exports = { getConnection, getData, endConnection };
