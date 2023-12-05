const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  user: "postgres",
  host: "localhost",
  database: "doctors",
  password: "root",
  port: 5432,
});

module.exports = pool;
