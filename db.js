require("dotenv").config();
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "students_w8yf_user",
  host: "localhost",
  database: "students_w8yf",
  password: "ImKC74zCSkSYDKKfuWBRMuCU3WrUeGgO",
  port: "5432",
});

module.exports = pool;

// user: process.env.USER,
// host: process.env.HOST,
// database: process.env.DATABASE,
// password: process.env.PASSWORD,
// port: process.env.DATABASE_PORT,

// user: "postgres",
// host: "localhost",
// database: "students",
// password: "1493",
// port: "5432",
