/**
* Decorating angular $log service to allow same client apps to use the API
*/
angular.module('framework.log',[])

.config(['$provide',function($provide){
  $provide.decorator('$log',function($delegate,shadowLogger){
    return shadowLogger($delegate);
  });
}])

angular.module('framework.log').factory('shadowLogger',function(){
  return function($delegate){

    var shadow = function(arg) {
      $delegate.warn(arguments);
      console.log('SHADOW: ',arguments);
    }

    return  {
      //TODO: add/replace others when needed
      log: shadow,
      info: shadow,
      warn: shadow,
      error: shadow,
      debug: shadow
    };
  };
});
