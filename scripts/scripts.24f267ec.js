"use strict";angular.module("torogozApp",["ngAnimate","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"MainCtrl"}).when("/holder",{templateUrl:"views/holder.html",controller:"HolderCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("torogozApp").controller("MainCtrl",["$scope",function(a){a.$parent.containerClass="home-page"}]),angular.module("torogozApp").controller("HolderCtrl",["$scope",function(a){a.$parent.containerClass="holder-page"}]);