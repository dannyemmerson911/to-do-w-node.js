var pg = require("pg");

var pool = new pg.Pool({
	user: "postgres",
	password: "databass",
	host: "localhost",
	port: 5432,
	database: "taskDb",
	ssl: false
}); 

module.exports = pool;