(() => {
  'use strict';

  const app = angular.module('myApp', [
    'ngRoute',
    'myApp.teacher',
    'myApp.student',
    'myApp.home'
  ]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.otherwise({redirectTo: '/home'});
  }]);

})();
