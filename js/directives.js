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

.directive("page2", function(){
	return {
		restrict: "E",
		templateUrl: "partials/page-2-partial.html",
		controller: "Page2CTL"
	};
})

.directive("page3", function(){
	return {
		restrict: "E",
		templateUrl: "partials/page-3-partial.html",
		controller: "Page3CTL"
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
