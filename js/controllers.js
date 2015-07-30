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

.controller('no-videoCTL', function(){

})

.controller('waiting-for-gpsCTL', function(){

})

.controller('magnetic-interferenceCTL', function(){

})

.controller('rangeCTL', function(){

})

.controller('go-proCTL', function(){

});

//<!-- ADD MORE CONTROLLERS-->

//<!-- /ADD MORE CONTROLLERS-->

;
