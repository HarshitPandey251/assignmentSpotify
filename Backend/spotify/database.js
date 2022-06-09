const mysql = require("mysql");

const connection = mysql.createPool({
  connectionLimit: 100,
  host: "",
  user: "",
  password: "",
  database: "",
});

module.exports = connection;
