(() => {
  'use strict';
  
  angular
    .module('myApp.student',[])
      .config(['$routeProvider', function($routeProvider) {
          $routeProvider.when('/student', {
              templateUrl: 'modules/student/partial/student.html',
              controller: 'studentCtrl'
          });
      }])
    .controller('studentCtrl', studentCtrl);

    studentCtrl.$inject = [
    '$scope'
  ];
  
  function studentCtrl($scope){
    $scope.hello = "student";
  }
})();