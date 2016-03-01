(function(){
    'use strict';
    angular.module('reportTracker.others', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/others', {
        templateUrl: 'others/others.html',
        controller: 'othersController'
      });
    }])
    .controller('othersController', ['$scope',function($scope) {
        alert("others");
        var demo= 10;
        function getdemo() {
        return demo;
        }
        
        $scope.login = function(user) {
            console.log(user);
        }
}]);
})();