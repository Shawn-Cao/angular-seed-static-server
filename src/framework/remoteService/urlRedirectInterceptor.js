/**
 * intercept relative path
 * accept/reject base on status code
 * return public fields only
 */
angular.module('framework.remoteService').factory('urlRedirectInterceptor', function($q, ENDPOINTS) {
  return {
    //re-write URL so client can use relative reference instead of full URL
    'request': function(config) {
      if (config.url.indexOf('://') === -1) {  //covers all non-relative url: 'http://', 'https://', and other protocols
        if (config.url.indexOf('customerSearch') !== -1) {
          config.url = ENDPOINTS.YOUR_DEPENDENCY_APP + config.url;
          debugger;
        }
      }
      return config;
    },
  };
});
