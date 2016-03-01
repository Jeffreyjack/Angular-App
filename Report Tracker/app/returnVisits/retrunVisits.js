(function(){
    'use strict';
    angular.module('reportTracker.returnVisits', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/returnVisits', {
        templateUrl: 'returnVisits/returnVisits.html',
        controller: 'returnVisitsController'
      });
    }])
    .controller('returnVisitsController', ['$scope',function($scope) {
        alert("rv");
        var demo= 10;
        function getdemo() {
        return demo;
        }
        
        $scope.login = function(user) {
            console.log(user);
        }
}]);
})();