const mysql = require("mysql");

const connection = mysql.createPool({
  connectionLimit: 100,
  host: "database-2-instance-1.cixcceofglai.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "Deltax1234",
  database: "deltax",
});

module.exports = connection;
