(() => {
  'use strict';

  angular
    .module('myApp.subject', [])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/subject/:subject', {
          templateUrl: 'modules/subject/partial/subject.html',
          controller: 'subjectCtrl',
        });
    }])
    .controller('subjectCtrl', subjectCtrl);

  subjectCtrl.$inject = [
    '$scope',
    '$routeParams',
  ];

  function subjectCtrl($scope, $routeParams){
    console.log($routeParams.subject);
  }
})();
