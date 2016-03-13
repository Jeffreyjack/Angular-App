(function(){
    'use strict';
    angular.module('reportTracker.dashboard', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
              $routeProvider.when('/dashboard', {
                templateUrl: 'dashboard/dashboard.html',
                controller: 'dashboardController'
              });
    }])
    .controller('dashboardController', ['$scope','CommonService',function($scope, CommonService) {
        
        $scope.today = new Date();
        if (window.openDatabase) {
            var db = openDatabase('ReportTrackerDB', '1.0', 'DB', 2 * 1024 * 1024);
        }
        
        $scope.monthList = [
            {                    
                    "id": 0,
                    "title": "January"
                    }, {
                    "id": 1,
                    "title": "February"
                    }, {
                    "id": 2,
                    "title": "March"
                    }, {
                    "id": 3,
                    "title": "April"
                    }, {
                    "id": 4,
                    "title": "May"
                    }, {
                    "id": 5,
                    "title": "June"
                    }, {
                    "id": 6,
                    "title": "July"
                    }, {
                    "id": 7,
                    "title": "August"
                    }, {
                    "id": 8,
                    "title": "September"
                    }, {
                    "id": 9,
                    "title": "October"
                    }, {
                    "id": 10,
                    "title": "November"
                    }, {
                    "id": 11,
                    "title": "December"
                }]; 
        $scope.topIconElements = CommonService.getTopIconElements();
        console.log($scope.topIconElements[0].title);
        
        $scope.assignments = CommonService.getAssignmentItems();
        
        $scope.tableDemo = ["heff","pem","mont","hwd","hds","adjshhfdf"];
        $scope.month = $scope.monthList[$scope.today.getMonth()].title;        
  
    }]);
})();