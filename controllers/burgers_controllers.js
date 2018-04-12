const express = require('express');
const router = express.Router();
const burgers = require('./models/burgers.js');
const app = express();

router.get('/', function(req, res) {
	burgers.all(function(data) {
    res.render('index', {burgers: res});
  });
});

router.post('/', function(req, res) {
	burgers.create (
	[
    	'burger_name', 
    	'devoured'
  	], 
  	[
    	req.body.burger_name, 
    	req.body.devoured
  	], 
  	function() {
    	res.render('index', {burgers: res});
  	});
}); 

router.put('/:id', function(req, res) {
	var param = req.params.id;

	burgers.delete(param, function() {
		res.redirect('/');
	});
});

router.delete('/:id', function(req, res) {
  var param = req.params.id;

  burgers.delete(param, function() {
    res.redirect('/');
  });
});

module.exports = router;



