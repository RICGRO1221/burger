const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const PORT = 3000;


app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controllers.js");
app.use("/", routes);


app.listen(PORT, function() {
	console.log('Server is up and running');
});