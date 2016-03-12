angular.module('framework.remoteService', [])

//replace $http with T-Mobile own implementation if needed
.config(['$provide',function($provide){
  $provide.decorator('$http',function($delegate,baseHttpService){
    return baseHttpService($delegate);
  });
}])

//list of interceptors
.config(['$httpProvider',function($httpProvider){
  $httpProvider.interceptors.push('urlRedirectInterceptor');
  $httpProvider.interceptors.push('responseProcessingInterceptor');
}]);

angular.module('framework.remoteService').factory('baseHttpService', function() {
  return function($delegate) {
    var patched = $delegate;

    //no change for now
    // patched.post = function() {
    //   console.log("running patched $http service");
    //   debugger;
    //   $delegate.post(arguments)
    // }
    return patched;
  };
});
