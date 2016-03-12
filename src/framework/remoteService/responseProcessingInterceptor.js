/**process response:
 * accept/reject base on status code
 * returns: public fields matching https://docs.angularjs.org/api/ng/service/$http#general-usage
 * TODO: discuss should we just return response.data?
 */
angular.module('framework.remoteService').factory('responseProcessingInterceptor', function($q, ENDPOINTS) {
  return {
    'response': function(response) {
      if (!response.data) {
        debugger;
        return $q.reject();
      }
      return response;
    }
  };
});
