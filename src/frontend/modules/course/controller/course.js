(() => {
  'use strict';

  angular
    .module('myApp.course', [])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/course/:subject/:topic', {
          templateUrl: 'modules/course/partial/course.html',
          controller: 'courseCtrl',
        });
    }])
    .controller('courseCtrl', courseCtrl);

  courseCtrl.$inject = [
    '$scope',
    '$routeParams',
  ];

  function courseCtrl($scope, $routeParams){
    $scope.subjectName = $routeParams.subject;
    $scope.topic = $routeParams.topic;
    const subject = subjectList.find(el => el.name === $scope.subjectName);
  }
})();
