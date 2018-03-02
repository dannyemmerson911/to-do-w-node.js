var express = require("express");
var router = express.Router();
var pool = require("./pg-connection-routes");  


router.get("/tasks", function(req, res){
	pool.query("SELECT * FROM tasks").then(function(result){
		res.send(result.rows); 
	}).catch(function(err){
		console.log(err);
		res.status(500).send("ERROR"); 
	});
})

router.post("/tasks", function(req, res){
	var task = req.body;
	var values = [task.task];
	var sql = "INSERT INTO tasks(task) VALUES($1::text)";
	pool.query(sql, values).then(function(result){
		res.status(201).send("CREATED."); 
	}).catch(function(err){
		console.log(err);
		res.status(500).send("ERROR"); 
	})	
})

router.put("/tasks/:id", function(reg, res){
	var toDo = req.body;
	var id = req.params.id;
	var sql = "UPDATE tasks SET task=$2::text WHERE id=$1::int"; 
	var values = [id, toDo.task]; 
	pool.query(sql, values).then(function(result){
		res.status(201).send("UPDATED");
	}).catch(function(err){
		console.log(err);
		res.status(500).send("ERROR"); 
	})

})

router.delete("/tasks/:id", function(req, res){
	var id = req.params.id;
	var sql = "DELETE FROM tasks WHERE id = $1::int";
	pool.query(sql, [id]).then(function(result){
		res.send("DELETED.")
	}).catch(function(err){
		console.log(err);
		res.status(500).send("ERROR"); 
	})
});	



module.exports = router; 
