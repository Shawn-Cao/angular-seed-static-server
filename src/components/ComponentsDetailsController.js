angular.module('yourComponent')
		.controller(
				'ComponentsDetailsController',
				function($scope, $filter, $exceptionHandler, $http) {
					$scope.env = 'hello world';
				})
		.controller('LoginController', function ($scope) {
})