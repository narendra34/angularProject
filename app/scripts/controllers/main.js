'use strict';

/**
 * @ngdoc function
 * @name angularDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDashboardApp
 */
angular.module('angularDashboardApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('ctrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
