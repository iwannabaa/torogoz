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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
