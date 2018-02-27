(function(){
	var taskForm = {
		
		templateUrl: "partials/form.template.html",

		controller: function(listService){
			var $ctrl = this;
			$ctrl.list = listService.getTasks();
			$ctrl.remove = function(task){
				listService.removeTask(task)
			};
			$ctrl.set = function(task){
				$ctrl.task = "";
				listService.addTask(task);
			};
			
		}
	};

	
	angular
		.module("AppModule")
		.component("taskForm", taskForm) 
}());