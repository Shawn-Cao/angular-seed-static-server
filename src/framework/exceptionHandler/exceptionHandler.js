/**
 * Client-side global exception handler at framework level
 * Note:
 *   Code executed in event-listeners (even those registered using jqLite's on/bind methods) does not delegate exceptions here
 *   If you wish, you can manually delegate exceptions, e.g. try { ... } catch(e) { $exceptionHandler(e); }
 */

angular.module('appExceptionHandling', ['ui.bootstrap']).factory('$exceptionHandler', function($log, $injector) {
  return function(exception, cause) {
  	if (!exception) { exception = {'message': 'unkown exception has happened'}; }
    if (!exception.message) { exception = {'message': exception}; }
  	//TODO: how exception should be formated?
    if (cause) { exception.message += ' (caused by "' + cause + '")'; }

    $injector.get('$uibModal').open({
    	backdrop: 'static',
        template: '<div class="exception-modal">{{exception.message}}<br /><button ng-click="ok()">OK</button></div>',
        controller: 'ExceptionModalCtrl',
        resolve: {
        	'exception' : function() { return exception; }
        }
    });

    $log.error(exception);
  };
})

.controller('ExceptionModalCtrl', function ($scope, $uibModalInstance, exception) {
	$scope.exception = exception;
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
  	};
  	$scope.ok = $scope.cancel;
});
