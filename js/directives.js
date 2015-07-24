'use strict';

/* Directives */


angular.module('myApp.directives', [])

.directive("navbar", function() {
	return {
		restrict: "E",
		templateUrl: "partials/navbar-partial.html",
		controller: 'NavbarCTL'
	};
})

.directive("home", function(){
	return {
		restrict: "E",
		templateUrl: "partials/home-partial.html",
		controller: "HomeCTL"
	};
})

.directive("why-awesome", function(){
	return {
		restrict: "E",
		templateUrl: "partials/page-2-partial.html",
		controller: "why-awesomeCTL"
	};
})

.directive("why-phu", function(){
	return {
		restrict: "E",
		templateUrl: "partials/page-3-partial.html",
		controller: "why-phuCTL"
	};
})

.directive("footer", function(){
	return {
		restrict: "E",
		templateUrl: "partials/footer-partial.html",
		controller: "FooterCTL"
	};
})

;
