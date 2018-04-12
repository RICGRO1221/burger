const connection = require('./connection.js');

const orm = {
	selectAll: function(table, onResult) {
		const query = 'SELECT * FROM ??';
		connection.query(query, [table], function(err, res) {
			onResult(err, result);
		});
	},
	insertOne: function(table, columnOne, columnTwo, valueOne, onResult) {
		const query = 'INSERT INTO ?? (??) VALUES (?)';
		connection.query(query,[table, column, value], function(err, res) {
			onResult(err, result);
		});
	},
	updateOne: function(table, column, value, id, onResult) {
		const query = 'UPDATE ?? SET ?? = ?, ?? = ? WHERE id = ?';
		connection.query(query, [table, column, value, id], function(err, res) {
			onResult(err, result);
		};
	}
}

module.exports = orm;

