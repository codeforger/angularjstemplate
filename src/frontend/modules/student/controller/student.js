(() => {
  'use strict';

  angular
    .module('myApp.student', [])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/student', {
          templateUrl: 'modules/student/partial/student.html',
          controller: 'studentCtrl',
          subject: 'chuj',
        })
        .when('/subject/:subject', {
          templateUrl: 'modules/subject/partial/subject.html',
          controller: 'studentCtrl',
          subject: 'chuj',
        });
    }])
    .controller('studentCtrl', studentCtrl);

  studentCtrl.$inject = [
    '$scope',
    '$route',
  ];

  function studentCtrl($scope, $route){
    $scope.subjectList = subjectList;

    const paramValue = $route.current.$$route.paramExample;
    console.log(paramValue);
  }
})();
