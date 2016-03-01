(function(){
    'use strict';
    angular.module('reportTracker.login', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/login', {
        templateUrl: 'login/login.html',
        controller:  'loginController'
      });
    }])
    .controller('loginController', ['$scope',function($scope) {
        var demo= 10;
        function getdemo() {
        return demo;
        }
        
        $scope.login = function(user) {
            console.log(user);
        }
}]);})();