(function(){
	var taskForm = {
		
		templateUrl: "partials/form.template.html",

		controller: function(listService){
			var $ctrl = this;
			loadPage(); 
			
			$ctrl.remove = function(task){
				listService.removeTask(task.id).then(loadPage)
				
			};
			$ctrl.set = function(newTask){
				$ctrl.task = "";
				listService.addTask(newTask).then(loadPage)
			};
			
			
			function loadPage(){
				listService.getTasks().then(function(tasks){
				$ctrl.list = tasks;
				});
			}
		}
	}

	

	
	angular
		.module("AppModule")
		.component("taskForm", taskForm) 
}());