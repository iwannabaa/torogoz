'use strict';

/**
 * @ngdoc function
 * @name torogozApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the torogozApp
 */
angular.module('torogozApp')
  .controller('HolderCtrl', function ($scope) {
    $scope.$parent.containerClass = 'holder-page';
  });
