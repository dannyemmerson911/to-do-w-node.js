var express = require("express");
var inMemoryDatabase = require("./in-memory-database");
var router = express.Router();

var taskDb = inMemoryDatabase();

taskDb.init([
	{task: "blahglksa"}
]);
	


router.get("/tasks", function(req, res){
	res.send(taskDb.readAll());
});

router.post("/tasks", function(req, res){
	var task = req.body; 
	taskDb.create(task);
	res.status(201).send(task);
});

router.put("/tasks", function(reg, res){
	var task = req.body;
	var id = req.params.id; 
	taskDb.delete(id); 
	taskDb.update(task); 
	res.status(201).send(task);
})

router.delete("/tasks/:id", function(req, res){
	var id = req.params.id;
	taskDb.delete(id); 
	res.send("Deleted, son."); 
})

module.exports = router; 
