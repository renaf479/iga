'use strict'


//Associates correct image coordinates with game
igaApp.directive('gameArt', function(){
	var template =  '<div class="" style="background-image: url(/img/games/{{ngModel.meta.image}})"></div>';
	return {
		replace: true,
		restrict: 'E',
		scope: {
			ngModel: '='	
		},
		template: template,
		link: function(scope, element, attrs) {
		}	
	}
});