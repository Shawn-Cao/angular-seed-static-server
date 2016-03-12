/**
* all the application level constants go here.
* common components can declared their constants at common level.
* feature apps should declare their constants within their own module
*/
angular.module('framework.constants', [])
.constant('REQUEST', {
  HEADER : '<fill in as needed>',
})
.constant('RESPONSE', {
  STATUS_OK : 'OK',
  STATUS_ERROR : 'ERROR',
})

.constant('DATA_FORMAT', {
  DATE_DEFAULT: 'MM/DD/YYYY'
})
