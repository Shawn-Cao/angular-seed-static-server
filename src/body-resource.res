@framework@if (mode === 'dev') {
  @framework@include('angular.res')
  <!-- Less compiler - from http://lesscss.org/ -->
  <script src="/vendor/lessCompiler/less.js" type="text/javascript"></script>

  <!-- include:js(framework/**/*.js) -->
  <!-- include:html(layouts/**/*.html) -->
}
@framework@if (mode !== 'dev') {
  <script src="vendor.js"></script>
  <script src="framework.js"></script>
  <!-- how do we want to bundle each app? -->
  <script src="components.js"></script>
  <!-- include:html(layouts/**/*.html) -->
}
