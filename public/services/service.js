(function(){
	var savedTaskArr = [];

	function listService($http){

		return {
			addTask: addTask,
			getTasks: getTasks,
			removeTask: removeTask
		}

		function removeTask(task){
			return $http({
				method: "DELETE",
				url: "/tasks/" + taskId
			});

		};
		
		function addTask(task){
			return $http({
				method: "POST",
				url: "/tasks",
				data: {task:task}
			});
		};


		function getTasks(){
			return $http({
				method: "GET",
				url: "/tasks"
			}).then(function(response){
				return response.data; 
			});
		};
	};

angular
	.module("AppModule")
	.factory("listService", listService); 
}());
