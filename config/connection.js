const mysql = require('mysql');
const PORT = 3307;

const connection = mysql.createConnection({
	port: PORT,
	host: localhost,
	user: 'root',
	password:'jjtg2125',
	database: 'burgers_db'
});

connection.connect(function(err) {
	if (err) {
    console.error("error connecting: " + err.stack);
    return;
	}
  	console.log("connected as id " + connection.threadId);
});

module.exports = connection;