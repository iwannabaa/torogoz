'use strict';

/**
 * @ngdoc function
 * @name torogozApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the torogozApp
 */
angular.module('torogozApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
