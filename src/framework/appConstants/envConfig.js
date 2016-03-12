/**
* all the application level constants go here.
* common components can declared their constants at common level.
* feature apps should declare their constants within their own module
*/
angular.module('framework.constants')
.constant('ENDPOINTS', {
  YOUR_DEPENDENCY_APP: 'http://internal.YOUR_DEPENDENCY_APP.com/',
  PROXY: 'http://localhost:8080/',
});
