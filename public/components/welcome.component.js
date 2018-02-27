(function(){
	var welcomeComponent = {
		template: `
		<div class = "welcomeForm">
			<h1>Welcome to TODO</h1>
			<p>Do more with your life. Increase your productivity with a simple to-do app</p>
			<a id="enter" href="#!/dolist">Enter<i id = "enterArrow" class = "material-icons">arrow_forward</i></a> 
		</div>
		`,

		controller: function(){
			var $ctrl = this; 
		}
	};

	angular
		.module("AppModule")
		.component("welcomeComponent", welcomeComponent); 
	
})();