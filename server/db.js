const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  port: 5432,
  database: "stackt"
});

module.exports = pool;