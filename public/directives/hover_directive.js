(function(){
	function hoverState(){
        return {
    		link: function($scope, $element, $attrs){
    				$element.on("mouseover", function(){
    					$element.css('background-color', '#bbb');
                        $element.css('border-radius', '7px');
    				});
    				$element.on("mouseout", function(){
    					$element.css("background-color", '#fff');
    				});
    			}
    		};	
    }
angular
	.module("AppModule")
	.directive("hoverState", hoverState);

}());