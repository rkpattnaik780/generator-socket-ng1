'use strict';

var socket = io();

var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.message = 'AngularJS setup successful';
});