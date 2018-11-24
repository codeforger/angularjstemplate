(() => {
  'use strict';

  const app = angular.module('myApp', [
    'ngRoute',
    'myApp.teacher',
    'myApp.student',
  ]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.otherwise({redirectTo: '/teacher'});
  }]);
  
})();
