'use strict';

/* Directives */


angular.module('myApp.directives', [])

.directive("home", function(){
	return {
		restrict: "E",
		templateUrl: "partials/home-partial.html",
		controller: "HomeCTL"
	};
})

.directive("why-phu", function(){
	return {
		restrict: "E",
		templateUrl: "partials/page-3-partial.html",
		controller: "why-phuCTL"
	};
})

;
