(function(){
    'use strict';
    angular.module('reportTracker.assignments', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/assignments', {
        templateUrl: 'assignments/assignments.html',
        controller: 'assignmentsController'
      });
    }])
    .controller('assignmentsController', ['$scope','CommonService', function($scope, CommonService) {
        var demo= 10;
        function getdemo() {
        return demo;
        }
        
        $scope.login = function(user) {
            console.log(user);
        }
        
        $scope.tableDemo = CommonService.getAssignmentItems();
        $scope.newAssignmentDate = new Date();
}]);
})();