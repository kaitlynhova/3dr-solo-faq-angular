angular.module('myApp.routes', [])

.config(function($routeProvider) {
  $routeProvider.when('/', {
		templateUrl: 'partials/home-partial.html',
		controller: 'HomeCTL'
	});
  $routeProvider.when('/page2', {
		templateUrl: 'partials/page-2-partial.html',
		controller: 'Page2CTL'
	});
  $routeProvider.when('/page3', {
		templateUrl: 'partials/page-3-partial.html',
		controller: 'Page3CTL'
	});
  $routeProvider.otherwise({
		redirectTo:'/'
	}); //If 404, send to homepage
});
