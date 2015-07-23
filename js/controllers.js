'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('NavbarCTL', function($scope, $location){
	$(".navbar-collapse .header_item").click(function(){
		if(window.innerWidth < 768){
			$(".collapse").collapse("hide");
		}
	});

	$scope.isActive = function(url){
		return url == $location.path();
	}
})

.controller('HomeCTL', function(){

})

.controller('Page2CTL', function(){

})

.controller('Page3CTL', function(){

})

.controller('FooterCTL', function(){

})

$locationProvider.html5Mode(true);

;
