var express = require("express");
var bodyParser = require("body-parser");
var taskRoutes = require("./tasks");
var app = express(); 
app.use(express.static(__dirname + "/public")); 
app.use(bodyParser.json());
app.use("/", taskRoutes);




var server = app.listen(3000, function() {
var port = server.address().port;
console.log("Express server is up and running.");
});