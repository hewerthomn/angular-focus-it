angular.module('focusIt', [])
	.factory('focus', ['$timeout', function($timeout)
	{
		return function(id) {
			$timeout(function() {
				var element = document.getElementById(id);
				if(element) element.focus();
			});
		};
	}])
	.directive('focusOn', ['focus', function(focus) {
		return function($scope, $elem, $attrs)
		{
			console.log('focus id', $attrs.focusId);
			console.log('focus on', $attrs.focusOn);

			$elem.on($attrs.focusOn, function() {
				focus($attrs.focusId);
			});

			$scope.$on('$destroy', function() {
				$elem.off($attrs.focusOn);
			});
		};
	}]);	