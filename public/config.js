(function(){
	angular
		.module("AppModule")
		.config(function($routeProvider){
			$routeProvider
				.when("/welcome", {
					template: "<welcome-component></welcome-component>"
				})
				.when("/dolist", {
					template: "<task-form></task-form>"
				})
				.otherwise({
					redirectTo: "/welcome"
				});
		});
})();