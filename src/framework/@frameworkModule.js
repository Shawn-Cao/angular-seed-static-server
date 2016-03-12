/**
 * Common Angular vendor modules required by all SPA apps
 * required by framework module
 */
angular.module('angular.common', ['ui.bootstrap', 'ui.router'])

/**
 * Including all framework's submodules here
 * Feature applictions should always include this module
 */
angular.module('framework', [
	'angular.common',
	'appExceptionHandling',
	'framework.constants',
	'framework.log',
	'framework.remoteService'
]);


angular.module('framework').controller('SpaController', function($scope) {
	$scope.routerLevel = 'level 0 - name = "spa"';
});
