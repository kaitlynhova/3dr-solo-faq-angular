'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
  'ngRoute' ,
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
	'myApp.routes'
]);