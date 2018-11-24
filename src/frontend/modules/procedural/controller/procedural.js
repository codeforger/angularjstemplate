(() => {
  'use strict';
  
  angular
    .module('myApp.procedural',[])
    .controller('proceduralCtrl', proceduralCtrl);
  
  proceduralCtrl.$inject = [
    '$scope',
    'localStorageOperations',
  ];
  
  function proceduralCtrl($scope, localStorageOperations){
    $scope.hello = "hello world";
  }
})();