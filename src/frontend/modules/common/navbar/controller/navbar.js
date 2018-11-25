(() => {
  'use strict';

  angular
    .module('myApp.navbar',[])
    .controller('navbarCtrl', navbarCtrl);

  navbarCtrl.$inject = [
    '$scope'
  ];

  function navbarCtrl($scope){
    tippy('.logout');
    $scope.hello = "student";
  }
})();
