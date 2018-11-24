(() => {
    'use strict';

    angular
        .module('myApp.home',[])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: 'modules/home/partial/home.html',
                controller: 'homeCtrl'
            });
        }])
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = [
        '$scope'
    ];

    function homeCtrl($scope){
        $scope.hello = "Home";
    }
})();
