angular.module('myApp.routes', [])

.config(function($routeProvider) {
  $routeProvider.when('/', {
		templateUrl: 'partials/home-partial.html',
		controller: 'HomeCTL'
	});

  $routeProvider.when('/no-video', {
		templateUrl: 'partials/no-video-partial.html',
		controller: 'no-videoCTL'
	});

  $routeProvider.when('/waiting-for-gps', {
    templateUrl: 'partials/waiting-for-gps-partial.html',
    controller: 'waiting-for-gpsCTL'
  });

  $routeProvider.when('/magnetic-interference', {
    templateUrl: 'partials/magnetic-interference-partial.html',
    controller: 'magnetic-interferenceCTL'
  });

  $routeProvider.when('/range', {
    templateUrl: 'partials/range-partial.html',
    controller: 'rangeCTL'
  });

  $routeProvider.otherwise({
		redirectTo:'/'
	}); //If 404, send to homepage
});
