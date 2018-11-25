(() => {
  'use strict';

  angular
    .module('myApp.subject',[])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/student/subject', {
        templateUrl: 'modules/subject/partial/subject.html',
        controller: 'subjectCtrl'
      });
    }])
    .controller('subjectCtrl', subjectCtrl);

  subjectCtrl.$inject = [
    '$scope'
  ];

  function subjectCtrl($scope){
    $scope.hello = "student";
  }
})();
