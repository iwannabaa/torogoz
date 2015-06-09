'use strict';

/**
 * @ngdoc overview
 * @name torogozApp
 * @description
 * # torogozApp
 *
 * Main module of the application.
 */
angular
  .module('torogozApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pageslide-directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/holder', {
        templateUrl: 'views/holder.html',
        controller: 'HolderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
