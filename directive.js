// extend HTML with custom attributes and elements 

myApp.directive('searchRes', function(){
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<a href="#" Class="list-group-item">\
					<h4 class="list-group-item-heading">Robert Downny</h4>\
					<p class="list-group-item-text">CA</p>\
					</a>',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		// link: function($scope, iElm, iAttrs, controller) {}
	};
});