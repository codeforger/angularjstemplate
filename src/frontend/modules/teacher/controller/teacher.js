(() => {
  'use strict';
  
  angular
    .module('myApp.teacher',[])
      .config(['$routeProvider', function($routeProvider) {
          $routeProvider.when('/teacher', {
              templateUrl: 'modules/teacher/partial/teacher.html',
              controller: 'teacherCtrl'
          });
      }])
    .controller('teacherCtrl', teacherCtrl);
  
  teacherCtrl.$inject = [
    '$scope'
  ];
  
  function teacherCtrl($scope){
    $scope.hello = "teacher";
  }
})();