'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('MainCtrl', function ($scope) {
    console.log("MainCtrl configured");
    $scope.message = 'AngularJS setup successful';
  });