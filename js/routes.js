angular.module('myApp.routes', [])

.config(function($routeProvider) {
  $routeProvider.when('/', {
		templateUrl: 'partials/home-partial.html',
		controller: 'HomeCTL'
	});
  $routeProvider.when('/why-awesome', {
		templateUrl: 'partials/why-awesome-partial.html',
		controller: 'why-awesomeCTL'
	});
  $routeProvider.when('/why-phu', {
		templateUrl: 'partials/why-phu-partial.html',
		controller: 'why-phuCTL'
	});

  $routeProvider.when('/why-rad', {
    templateUrl: 'partials/why-rad-partial.html',
    controller: 'why-radCTL'
  });

  $routeProvider.otherwise({
		redirectTo:'/'
	}); //If 404, send to homepage
});
