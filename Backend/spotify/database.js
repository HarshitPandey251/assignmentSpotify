const mysql = require("mysql");

const connection = mysql.createPool({
  connectionLimit: 100,
  host: "embifitest2.cluster-cixcceofglai.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "Python123",
  database: "embifi",
});

module.exports = connection;
