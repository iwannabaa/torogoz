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
    $scope.$parent.containerClass = 'home-page';
    $scope.checked = true;
    $scope.toggleMenu = function() {
      $scope.checked = !$scope.checked;
    };
  });
